/* ================= Collegamento con l'app del paziente (solo nel prototipo unico) ================= */
if (window.LINKED) {
  const PAZ = ['Lucia De Santis', 'Giorgio De Santis'];
  const toPaz = (m) => { try { parent.postMessage(Object.assign({ from: 'farm' }, m), '*'); } catch (e) { /* nessuna pagina intorno */ } };
  const CAT = { 'Come si usa un farmaco': 'Uso del farmaco', 'Effetti indesiderati': 'Effetti indesiderati', 'Farmaci da prendere insieme': 'Interazioni', 'Altro': 'Altro' };
  let last = '';
  const emit = () => {
    const orders = S.orders.filter((o) => PAZ.includes(o.patient)).map((o) => ({ code: o.code, status: o.status, amount: o.amount, noPay: !!o.noPay, paidAt: o.paidAt || '', via: o.via || '', rider: o.rider && o.rider.name ? { name: o.rider.name, eta: o.rider.dropEta || '' } : null }));
    const ext = {};
    S.inbox.forEach((it) => { const e = it.m && it.m.ext; if (!e) return; ext[e] = ext[e] || { ext: e, status: '', msgs: [] }; if (it.sent) ext[e].msgs.push({ me: true, t: it.sent.t, at: it.sent.at }); });
    S.consults.forEach((c) => { if (!c.ext) return; const x = ext[c.ext] = ext[c.ext] || { ext: c.ext, status: '', msgs: [] }; x.status = c.status; c.msgs.forEach((m) => { if (m.me) x.msgs.push({ me: true, t: m.t, at: m.at }); }); });
    const payload = { type: 'state', orders, consults: Object.values(ext) };
    const j = JSON.stringify(payload);
    if (j !== last) { last = j; toPaz(payload); }
  };
  const _render = render;
  render = function () { _render(); emit(); };
  const _cc = createConsult;
  createConsult = function (m, at, ai) {
    const it = S.inbox.find((x) => x.m && x.m.ext && x.from === m.from && x.text === m.text);
    const c = _cc(m, at, ai);
    if (m.ext || it) { c.ext = m.ext || it.m.ext; render(); }
    return c;
  };
  const setPatients = (list) => (list || []).forEach((p) => {
    let x = S.patients.find((q) => q.name === p.name);
    if (!x) { x = { id: 'pz' + S.patients.length, name: p.name, note: '', ch: 'App', ther: [] }; S.patients.push(x); }
    x.ther = p.ther; if (p.note) x.note = p.note;
  });
  const addOrder = (r, quiet) => {
    if (byCode(r.code)) return;
    const st = r.status === 'inviato' ? 'nuovo' : r.status;
    const o = { id: 'a' + r.code, code: r.code, patient: r.name, who: r.who || '', ch: 'app', at: quiet ? r.at : now(), status: st, mode: r.mode, slot: r.slot, address: r.addr || '', cf: r.cf,
      amount: typeof r.amount === 'number' ? fmtEur(r.amount) : '', free: r.free || '', fresh: !quiet, armadietto: true, noPay: !!r.noPay, paidAt: r.paidAt || '',
      items: r.items.map((i) => ({ name: i.name + (i.cart ? ' · ricetta cartacea da portare al ritiro' : ''), nre: i.cart ? 'cartacea' : i.nre, av: st === 'nuovo' ? null : 'pronto', fridge: !!i.fridge })), chat: [] };
    S.orders.unshift(o);
    if (!quiet) {
      pendingNotes.push('È arrivato l’ordine #' + o.code + ' di ' + o.patient + ' dall’app');
      S.tab = 'ordini'; S.oview = 'coda'; S.sel = o.id;
      toast('Nuovo ordine dall’app di ' + o.patient + ' · #' + o.code, 'new');
    }
  };
  async function receiveChat(r) {
    const m = { from: r.name, who: '', ch: 'app', text: r.text, ext: r.ext };
    const it = addInbox({ src: 'wa', from: r.name, who: '', ch: 'app', at: now(), text: r.text, m, d: null, state: 'reading', byClaude: false });
    S.iSel = it.id; setIn(true); render();
    toast('Nuovo messaggio dall’app di ' + r.name + ' · Claude lo sta leggendo', 'new');
    let d = null;
    if (sample) { try { d = await sample.json(waPrompt(m, it.at), { modelTier: 'quick', cache: false }); it.byClaude = true; } catch (e) { if (e && e.code === 'not_granted') sampleState = 'denied'; } }
    if (!d || typeof d !== 'object') {
      const clin = /prend|insieme|dose|effett|dimentic|interaz/i.test(r.text);
      d = { e_ordine: false, consulto: clin, categoria: clin ? 'Uso del farmaco' : 'Altro', riassunto: r.text.slice(0, 120), da_controllare: [], risposta_suggerita: clin ? '' : 'Buongiorno Lucia, grazie del messaggio: ci pensiamo noi e le scriviamo appena possibile. Farmacia Rossi' };
      it.byClaude = false;
    }
    it.d = d; it.kind = kindOf(it); it.reply = String(d.risposta_suggerita || ''); it.state = 'ready'; render();
  }
  window.addEventListener('message', (e) => {
    const r = e.data; if (!r || r.to !== 'farm') return;
    if (r.type === 'hello') { setPatients(r.patients); (r.orders || []).forEach((o) => addOrder(o, true)); render(); }
    else if (r.type === 'patients') { setPatients(r.list); render(); }
    else if (r.type === 'order') { addOrder(r.order, false); render(); }
    else if (r.type === 'pay') { const o = byCode(r.code); if (o) markPaid(o); }
    else if (r.type === 'consult') receiveConsult({ from: r.name, who: r.who, ch: 'app', text: r.text, ext: r.id,
      fb: { categoria: CAT[r.topic] || 'Altro', riassunto: (r.med ? r.med + ': ' : '') + r.text.slice(0, 110), da_sapere: r.med ? ['Terapia indicata: ' + r.med] : [], priorita: /respir|svenut|gonfi|petto/i.test(r.text) ? 'alta' : 'normale', motivo_priorita: 'Riferisce un sintomo da valutare subito' } });
    else if (r.type === 'consultMsg') {
      const c = S.consults.find((x) => x.ext === r.id);
      if (c) { c.msgs.push({ me: false, t: r.text, at: now() }); c.status = 'nuovo'; c.wait = 0; render(); toast('Nuova risposta di ' + c.patient + ' al consulto', 'new'); }
      else { const it = S.inbox.find((x) => x.m && x.m.ext === r.id); if (it) { it.text += '\n' + r.text; render(); } }
    }
    else if (r.type === 'consultClose') { const c = S.consults.find((x) => x.ext === r.id); if (c) { c.status = 'chiuso'; c.outcome = 'Chiuso dal paziente'; render(); } }
    else if (r.type === 'chat') receiveChat(r);
  });
  // spazio stretto accanto al telefono: la chat con Claude parte chiusa, si apre con il pulsante Chat
  setTimeout(() => { try { setAi(false); } catch (e) { /* toggle non disponibile */ } toPaz({ type: 'ready' }); emit(); }, 0);
}


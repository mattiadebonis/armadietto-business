# Piattaforma farmacie: consegna farmaci con ricetta e app paziente

27 novembre 2026 · Mattia De Bonis

## Sintesi

La proposta: una piattaforma venduta in abbonamento alle farmacie, con cui ogni farmacia offre ai propri pazienti l'app per organizzare i farmaci e ordinarli. Il modello è B2B2C: paga la farmacia, il paziente la usa gratis.

**Decisioni prese**

- No marketplace stile Just Eat: c'è già Pharmap, e la commissione sui farmaci con ricetta vale poco ed è delicata dal punto di vista normativo.
- Sì a un software per le farmacie, che mantengono il rapporto con il paziente.
- Modello misto: l'app nello store ha il marchio della piattaforma, tutto ciò che il paziente vede (link, WhatsApp, widget, sezione "La mia farmacia") porta il nome della farmacia che lo sceglie. Il paziente ordina da link web, WhatsApp integrato o app. L'app usa il motore di Armadietto (strada A).
- Ricavi da abbonamento mensile per farmacia, a livelli. In futuro anche consegna con corrieri e offerta per le catene.

**Prossimo passo:** validare con 15–20 farmacie e 10–15 pazienti, poi un test manuale con 2–3 farmacie prima di sviluppare il prodotto completo.

## Contesto normativo

In Italia vendere online farmaci con ricetta è vietato. Sono consentite la prenotazione online e la consegna a domicilio da parte della farmacia fisica: il prodotto va progettato dentro questo spazio.

| Tema | Regola | Effetto sul prodotto |
| --- | --- | --- |
| Vendita a distanza | Vietata per i farmaci con ricetta, art. 112-quater d.lgs. 219/2006 ([Agenda Digitale](https://www.agendadigitale.eu/?p=173016)) | Chi vende è sempre la farmacia: la piattaforma prenota e organizza, non vende |
| Prenotazione | Consentita: si riserva il farmaco con codice NRE ([Dr. Max](https://www.drmax.it/farmaci-con-ricetta-online-cosa-si-puo-fare-e-cosa-no-secondo-la-normativa-italiana)) | Flusso centrale: NRE + codice fiscale → verifica del farmacista |
| Consegna a domicilio | Le farmacie convenzionate possono organizzarla. La ricetta va spedita in farmacia, controlli dell'AUSL ([Regione Emilia-Romagna](https://imprese.regione.emilia-romagna.it/semplificazione-e-sportello-unico/schede-attivita-imprenditoriali/farmacia-e-vendita-online-di-farmaci/farmacia_e_vendita_online_di_farmaci_scheda_informativa.pdf)) | Consegna fatta dalla farmacia o per suo conto |
| Zona grigia | Il divieto riguarda l'e-commerce, non le piattaforme di consegna, ma manca una norma chiara ([Altroconsumo](https://www.altroconsumo.it/salute/farmaci/speciali/delivery-farmaci)) | Parere legale prima del lancio |
| Ricette non elettroniche | Alcune restano cartacee, per esempio gli stupefacenti ([Altroconsumo](https://www.altroconsumo.it/salute/diritti-in-salute/speciali/ricetta-medica)) | L'app segnala quando serve il ritiro fisico o la delega |

Questo non è un parere legale: i punti da far verificare sono raccolti nell'ultima sezione.

## Concorrenza

Il marketplace è già occupato. Lo spazio libero sembra quello di un software serio per la farmacia, che unisca la gestione degli ordini da ricetta a un'app del paziente usata ogni giorno.

| Attore | Modello | Note |
| --- | --- | --- |
| [Pharmap](https://www.finanzaonline.com/?p=633951) | Marketplace con il proprio marchio, consegna in 90 minuti o programmata | Accordo con Poste per arrivare a 5000 farmacie. Collabora con alcune Federfarma provinciali ([StartupItalia](https://startupitalia.eu/104190-20190207-pharmap-delivery-medicinali-farmacia)) |
| Glovo, Comqura, Pharmaprime | Marketplace / delivery | Provati da [Altroconsumo](https://www.altroconsumo.it/salute/farmaci/speciali/delivery-farmaci) |
| [iFarmaDigital](https://apps.apple.com/it/app/ifarmadigital/id1574161404?l=en-GB), FarmaciaBianca, Farma Focus | App con il nome della farmacia | Vetrina, chat, invio dell'NRE: niente gestione delle terapie e delle scorte |
| [Farmakom](https://startupitalia.eu/economy/economia-digitale/farmakom-le-commerce-farmaceutico-chiavi-in-mano/), Migliorshop | E-commerce chiavi in mano per farmacie | Solo prodotti senza ricetta: canale e prezzi di riferimento per il B2B |

La differenza da costruire: terapie e scorte del paziente visibili alla farmacia, con il suo consenso, e riordino proattivo.

## Modello di business e flusso dell'ordine

La farmacia compra un servizio da dare ai propri pazienti, "l'app della tua farmacia", e lo promuove al banco. Così la farmacia è il canale per trovare i pazienti e il motivo per cui restano.

**Chi fa cosa**

- **Farmacia:** paga l'abbonamento, propone l'app con un QR code, verifica le ricette, prepara e consegna.
- **Paziente o chi lo assiste:** organizza i farmaci in Armadietto, riceve gli avvisi di scorta, ordina.
- **Piattaforma:** collega le due parti, gestisce gli ordini e le notifiche, raccoglie le statistiche per la farmacia.

**Flusso di un riordino**

1. Armadietto stima che una confezione finisce tra 7 giorni e avvisa il paziente.
2. Il paziente chiede la ricetta al medico e inserisce l'NRE, oppure fotografa il promemoria.
3. L'ordine arriva nella dashboard della farmacia, con eventuali prodotti senza ricetta aggiunti.
4. Il farmacista verifica la ricetta nel gestionale e indica la disponibilità: pronto, in arrivo dal grossista o equivalente da confermare.
5. Il paziente sceglie ritiro o consegna e riceve lo stato via app o WhatsApp.
6. La farmacia consegna in confezione anonima e incassa alla consegna con POS o contanti.
7. Armadietto aggiorna le scorte appena l'ordine è consegnato.

## Nome della farmacia e canali di ordine

Il paziente vede sempre e solo il nome della farmacia che ha scelto il software. Può ordinare da tre canali, tutti collegati alla stessa dashboard: l'app è un'opzione, non un obbligo.

| Canale | Come funziona | Per chi | Note |
| --- | --- | --- | --- |
| Link web | Pagina d'ordine con nome, logo e colori della farmacia (es. farmaciarossi.…), aggiungibile alla schermata Home. NRE + codice fiscale o foto, senza installare niente | Chi ordina ogni tanto | Il canale più semplice: va nell'MVP. Si diffonde con QR code, bio Instagram, Google Maps, firma WhatsApp |
| WhatsApp integrato | Il paziente scrive al numero WhatsApp della farmacia come oggi. Un assistente raccoglie NRE, codice fiscale o foto e crea l'ordine nella dashboard; gli aggiornamenti tornano su WhatsApp | Chi non cambia abitudini, anziani | WhatsApp Business Platform sul numero della farmacia. Meta fa pagare i messaggi: costo da includere nel prezzo. Dati sanitari su WhatsApp: da valutare con il legale |
| App | Le funzioni di Armadietto (scorte, terapie, riordino) con il nome della farmacia | Cronici e chi assiste i familiari | Vedi sotto: due modi di pubblicarla |

**Due modi di pubblicare l'app con il nome della farmacia**

1. **App unica, personalizzata dopo il collegamento:** una sola app negli store. Dopo il QR code mostra nome, logo e colori della farmacia. Nello store il nome è il vostro, dentro l'app solo quello della farmacia. Costo di gestione basso: va bene per Base e Pro.
2. **App dedicata negli store con il nome della farmacia:** Apple rifiuta le app fatte da template se non sono pubblicate dal titolare dei contenuti ([guideline 4.2.6](https://developer.apple.com/forums/thread/840982)). Quindi la pubblica la farmacia, con il suo account sviluppatore, e voi la gestite per lei. È costosa da mantenere: solo come offerta premium per catene e gruppi.

Armadietto resta l'app consumer per chi non ha una farmacia collegata. Il suo codice diventa il motore delle app con il nome delle farmacie.

### Decisione sul marchio

L'app negli store ha il marchio della piattaforma; il nome della farmacia sta dove il paziente la incontra. Il valore costruito, cioè base di utenti e marchio, resta vostro, e la farmacia mantiene il rapporto con il paziente.

| Dove | Marchio |
| --- | --- |
| App negli store | Piattaforma (nuovo nome di Armadietto) |
| Dentro l'app, sezione "La mia farmacia" | Farmacia: logo, colori, farmacista, servizi |
| Link web, WhatsApp, widget sul sito | Solo farmacia |
| Dashboard e messaggi al paziente | Farmacia |
| App dedicata negli store | Farmacia, solo come offerta premium per catene e gruppi |

**La promessa alle farmacie, scritta nel contratto**

- A un paziente collegato non vengono mai mostrate altre farmacie.
- I dati del paziente non vengono usati per indirizzarlo altrove.
- Se la farmacia lascia la piattaforma, può esportare i dati dei suoi pazienti, con il loro consenso.

Pitch: "la tua farmacia, dentro un'app che i pazienti hanno già".

## Widget e API per i siti delle farmacie

Molte farmacie hanno già un sito o un e-commerce di prodotti senza ricetta. La piattaforma entra lì senza sostituirlo: widget JavaScript da incollare nel sito e API per collegare l'e-commerce agli ordini da ricetta.

**Widget JS personalizzati**

Si installano con una riga di codice o con un plugin WordPress/Shopify. Prendono nome, logo e colori della farmacia.

| Widget | Cosa fa |
| --- | --- |
| Ordina con ricetta | Modulo NRE + codice fiscale o foto del promemoria, ritiro o consegna |
| Prenota un servizio | Calendario per ECG, Holter, televisita, tamponi, vaccinazioni |
| Stato dell'ordine | Il paziente segue l'ordine con il numero ricevuto |
| Riordina | Per i pazienti collegati: le terapie in esaurimento, ordinabili con un clic |
| Contatto rapido | Pulsante WhatsApp integrato o chat con la farmacia |
| Scarica l'app | Banner o QR code per collegarsi all'app della farmacia |

Requisiti tecnici: isolamento dal sito ospite (Web Component con Shadow DOM o iframe), script leggero, nessun cookie di terze parti prima del consenso, dati inviati solo alla piattaforma in UE, accessibilità WCAG.

**API e webhook per l'e-commerce**

| Risorsa | Uso |
| --- | --- |
| Ordini | Creare dall'e-commerce un ordine con ricetta (NRE) e leggerne lo stato |
| Webhook | Notifiche su cambi di stato e consegne, firmate (HMAC), con dati minimi: identificativi, non dati sanitari |
| Prenotazioni | Leggere gli slot liberi dei servizi e prenotare |
| Consegne | Chiedere preventivo e prenotare un rider partner |
| Disponibilità | Disponibilità dei prodotti, quando c'è l'integrazione con il gestionale |
| Accesso paziente | Accesso unico (OAuth) tra sito e app, solo con consenso del paziente |

Sicurezza: credenziali OAuth per farmacia, permessi per risorsa, limiti di chiamate, registro delle chiamate.

**Vincolo normativo:** l'e-commerce della farmacia vende solo prodotti senza ricetta. Con le API i farmaci con ricetta restano prenotazioni gestite dalla farmacia, mai articoli nel carrello da pagare online.

**Opportunità di canale:** i fornitori di e-commerce per farmacie, come Farmakom e Migliorshop, possono integrare le API e portare le loro farmacie, con una quota di ricavi.

## Consegne: corrieri propri o partner

Nella dashboard ogni farmacia sceglie, per ogni consegna, se usare il proprio fattorino o un corriere partner. La piattaforma gestisce entrambi allo stesso modo verso il paziente: stato, orario e conferma di consegna.

| Opzione | Come funziona | Costo | Note |
| --- | --- | --- | --- |
| Corrieri propri | Vista corriere su smartphone: giro del giorno ottimizzato, navigazione, firma o foto alla consegna, incasso online, stato in tempo reale al paziente | Incluso nell'abbonamento | Va nell'MVP. È l'unica opzione sicura per farmaci da frigo e stupefacenti |
| Partner on-demand | La dashboard prenota il rider con un clic. Candidato principale: [Glovo On-Demand](https://www.restimo.com/en/integrations/glovo-on-demand), che consegna ordini nati su canali propri, attivabile via API tramite il commerciale Glovo ([ShippyPro](https://help.shippypro.com/en/knowledge/articles/6015040-how-to-connect-glovo-to-shippypro)) | Per consegna, in base alla distanza ([Glovo](https://glovoapp.com/it/package-delivery)) | Uber Direct: in Italia da verificare. In alcuni paesi esclude gli articoli medici ([Uber](https://www.uber.com/es/en/b/courier-services/silla-es-vc-es/)) |
| Scelta automatica | L'agente AI propone il canale in base a urgenza, distanza, costo e tipo di farmaco | — | V2 |

**Il punto critico:** i rider esterni possono portare farmaci con ricetta? Gli accordi tra Glovo e le farmacie visti finora riguardano automedicazione e parafarmaco ([Tech Princess](https://techprincess.it/?p=223673)). Da verificare con il legale e nel contratto con il partner, prima di promettere questa opzione.

**La partnership come leva:** voi negoziate la tariffa per tutta la rete di farmacie, cosa che una singola farmacia non riesce a fare. Il ricavo per voi è un margine sulla consegna o una quota per consegna prenotata.

## Telefarmacia

La telemedicina in farmacia è ormai strutturale e finanziata. La piattaforma non eroga prestazioni mediche: le prenota, le collega ai centri che refertano e porta i risultati nell'app del paziente.

**Il quadro**

- La legge di Bilancio 2026 integra stabilmente nel SSN i servizi delle farmacie convenzionate, con 50 milioni di euro l'anno ([Agenda Digitale](https://www.agendadigitale.eu/sanita/telemedicina-in-farmacia-le-nuove-regole-cambiano-il-mercato/)).
- Le linee AGENAS di settembre 2026 prevedono quattro ambiti: televisita, telemonitoraggio/telecontrollo, teleconsulto, teleassistenza. Il farmacista non interpreta i dati clinici ([Quotidiano Sanità](https://www.quotidianosanita.it/?p=153312)).
- Nel 2025 le farmacie hanno superato il milione di prestazioni di telemedicina, tra ECG e Holter cardiaco e pressorio ([Quotidiano Sanità](https://www.quotidianosanita.it/uncategorized/telemedicina-in-farmacia-federfarma-superato-il-milione-di-prestazioni-nel-2025-28-per-ecg-holter-cardiaco-e-pressorio/)).
- Le farmacie lavorano già con centri servizi di telemedicina esterni per teleconsulto e refertazione ([esempio di contratto quadro](https://lawinsider.com/it/contracts/dbRnLACNbc1)).

| Funzione | Cosa fa la piattaforma | Rilascio |
| --- | --- | --- |
| Prenotazione prestazioni | Il paziente prenota ECG, Holter, televisita da link, WhatsApp o app; promemoria e preparazione | V2 |
| Televisita assistita | Agenda, sala video, ingresso del paziente nello spazio riservato della farmacia, collegamento con il medico | V3 |
| Telemonitoraggio | Pressione, glicemia, saturazione da dispositivi certificati, in farmacia o a casa, raccolti in Armadietto e inviati al centro o al medico | V3 |
| Referti | Il referto del centro arriva nell'app del paziente, accanto alle sue terapie | V2 |
| Consulenza a distanza del farmacista | Videochiamata o chat su uso dei farmaci e aderenza | V2, da verificare cosa rientra nella teleassistenza |
| Integrazione con i centri servizi | Collegamento ai provider di refertazione già usati dalla farmacia, non un centro proprio | V3 |

**Ricavi:** modulo aggiuntivo all'abbonamento o quota per prestazione prenotata. La farmacia ha un incentivo a pagarlo, perché le prestazioni sono finanziate dal SSN.

**Da verificare:** requisiti delle linee AGENAS e delle regole regionali, come spazio dedicato e farmacista formato; quali dispositivi usare; quali dati vanno al fascicolo sanitario elettronico. Il telemonitoraggio aumenta il rischio di rientrare nei dispositivi medici: meglio integrare dispositivi e software già certificati.

## Agente AI nella dashboard

L'agente organizza il lavoro della farmacia e prepara le azioni; il farmacista conferma. Non dà consigli clinici e, all'inizio, non manda nulla al paziente senza approvazione.

| Compito | Cosa fa l'agente | Cosa resta al farmacista |
| --- | --- | --- |
| Smistamento in entrata | Legge messaggi WhatsApp, foto del promemoria e link; estrae NRE e codice fiscale; crea la bozza d'ordine | Verifica la ricetta e conferma |
| Piano della giornata | Ordina la coda per urgenza, separa ritiri e consegne, segnala cosa ordinare al grossista prima del passaggio | Decide le priorità finali |
| Consegne | Raggruppa per zona e fascia oraria, propone il giro e il canale (fattorino o partner) | Approva il giro o prenota il rider |
| Riordini proattivi | Elenca i pazienti con terapie condivise in esaurimento e prepara i messaggi | Approva l'invio |
| Domande non cliniche | Prepara le risposte su orari, stato dell'ordine, disponibilità | Le domande sui farmaci passano sempre a lui |
| Riepilogo | A fine giornata: ordini evasi, in sospeso, consegne, vendite senza ricetta | — |

**Vincoli**

- Fornitore del modello con accordo sul trattamento dei dati, dati nell'UE, nessun addestramento sui dati delle farmacie.
- Registro di ogni azione proposta e di chi l'ha approvata.
- Il paziente deve sapere quando parla con un assistente AI: obbligo di trasparenza dell'AI Act, da verificare.
- Nessuna funzione clinica (dosi, interazioni), anche per restare fuori dal regolamento sui dispositivi medici.

L'agente sta nel piano Pro: è la funzione che giustifica il salto di prezzo.

## Prezzi e ricavi

Ricavi da abbonamento mensile per punto vendita, indipendente dal valore dell'ordine. I prezzi sono ipotesi da verificare nelle interviste, non dati di mercato.

| Voce | Prezzo ipotizzato | Cosa include |
| --- | --- | --- |
| Attivazione | €0–300 una tantum | Configurazione, formazione, materiale da banco (QR code, locandine) |
| Base | €39–59/mese | Dashboard ordini, ricette, chat, stato ordine, pazienti collegati in Armadietto |
| Pro | €89–129/mese | + agente AI, avvisi proattivi sulle terapie condivise, catalogo senza ricetta, prenotazione servizi, statistiche, più operatori, API e webhook per l'e-commerce |
| Catene | Prezzo per punto vendita, scontato | Più sedi, smistamento ordini, app dedicata sugli store (premium) |
| Consegna (V3) | €/consegna o margine sul costo pagato dal paziente | Rider partner prenotati dalla dashboard, tariffa negoziata per la rete |

**Il paziente non paga:** i pazienti collegati a una farmacia abbonata hanno le funzioni premium di Armadietto incluse. Chi non è collegato resta sul modello consumer di Armadietto.

**L'obiezione "WhatsApp è gratis"** si supera con i numeri nella dashboard: ordini gestiti, tempo risparmiato, vendite senza ricetta generate, pazienti che riordinano.

Prima di fissare i prezzi da verificare: quanto pagano oggi le farmacie per e-commerce e app (Farmakom, Migliorshop, iFarmaDigital).

## Strada A: Armadietto come app del paziente

Armadietto ha già la parte più difficile, cioè scorte, scansione e "Da fare". Per diventare l'app delle farmacie servono però un backend, l'apertura ad Android e il web, e un accordo chiaro su chi possiede cosa.

| Cosa c'è oggi | Cosa serve per la piattaforma |
| --- | --- |
| Solo iPhone | Android e web (PWA): i pazienti delle farmacie e chi li assiste usano molto Android |
| Dati locali, niente sincronizzazione al lancio | Backend con account e sincronizzazione: senza, la farmacia non riceve ordini né terapie condivise |
| Accesso con Apple/Google previsto | Accesso anche con numero di telefono e codice di verifica, per gli utenti meno digitali |
| Scansione della confezione, stima di fine scorte | Invariato: è il cuore dell'avviso di riordino |
| Tab "Da fare" (compra, ricetta, scrivi al medico) | "Compra" e "Ricetta" diventano "Ordina dalla mia farmacia" |
| Nessuna conferma di assunzione | Invariato: coerente con "l'app ricorda e organizza, non consiglia" |
| Target 25–45 anni e caregiver | Allargato: pazienti cronici più anziani, tramite il farmacista e chi li assiste |
| Paywall consumer | Premium incluso per chi è collegato a una farmacia abbonata |
| Nome da cambiare, verso la salute in generale | Per le farmacie l'app mostra solo nome, logo e colori della farmacia. Il nuovo nome è quello della piattaforma negli store |

**Proprietà e accordi.** Armadietto è tuo e la società nasce con un'altra persona. Va deciso per iscritto se Armadietto entra nella società come conferimento o resta tuo e viene dato in licenza. Va verificato anche con il vincolo del contratto Hinto: la società o la partita IVA dovrebbe essere intestata al socio.

## Elenco funzionalità

Tutte le funzionalità della piattaforma, raggruppate per area e senza priorità. La pianificazione per rilascio è nella sezione successiva.

| Area | Funzionalità |
| --- | --- |
| Canali con il nome della farmacia | Link web d'ordine con nome, logo e colori; aggiunta alla schermata Home; WhatsApp integrato sul numero della farmacia; app unica personalizzata dopo il QR code; app dedicata negli store a nome della farmacia; QR code e materiali da banco; widget JS da integrare nel sito della farmacia |
| Ordini e ricette | Ordine da NRE + codice fiscale; foto del promemoria; più ricette per ordine; prodotti liberi in testo; ritiro o consegna con fascia oraria; stato dell'ordine via notifica o WhatsApp; storico ordini; gestione delle ricette non elettroniche e delle deleghe |
| Dashboard della farmacia | Coda ordini a colonne con avviso sonoro; verifica della ricetta e copia nel gestionale; disponibilità (pronto, dal grossista, equivalente da confermare); chat per ordine; importo prima della consegna; più operatori con registro delle azioni |
| Consegne | Vista corriere con giro ottimizzato e navigazione; firma o foto alla consegna; consegna a delegato; incasso con POS; stato in tempo reale al paziente; prenotazione del rider partner (Glovo On-Demand); scelta del canale per consegna |
| Presa in carico del paziente (Armadietto) | Armadietto con scansione della confezione e scadenze; terapie e scorte con stima di fine confezione; avviso di riordino; tab "Da fare"; profili familiari e chi assiste; condivisione delle terapie con la farmacia con consenso per singola voce; avvisi proattivi del farmacista |
| Telefarmacia | Prenotazione di ECG, Holter e televisita; televisita assistita in farmacia; telemonitoraggio da dispositivi certificati; referti nell'app del paziente; consulenza a distanza del farmacista; collegamento ai centri servizi di telemedicina |
| Agente AI | Smistamento dei messaggi e creazione delle bozze d'ordine; piano della giornata; proposta di giri e canali di consegna; lista dei riordini proattivi con messaggi pronti; bozze di risposta a domande non cliniche; riepilogo di fine giornata |
| Vendita e servizi | Catalogo dei prodotti senza ricetta e parafarmaco; suggerimenti del farmacista; prenotazione di servizi (tamponi, pressione, vaccinazioni); comunicazioni e promozioni con consenso marketing separato |
| Statistiche | Ordini, tempo medio di evasione, consegne, vendite senza ricetta generate, pazienti collegati e che riordinano, prestazioni di telefarmacia |
| Catene e gruppi | Più punti vendita; smistamento dell'ordine alla sede più vicina; magazzino condiviso; report consolidati |
| Privacy e sicurezza | Consensi granulari e revocabili; registro degli accessi; conservazione dei dati definita; hosting nell'UE; trasparenza quando risponde l'AI |
| Integrazioni | Gestionale di farmacia; WhatsApp Business Platform; Glovo On-Demand e altri partner di consegna; provider di telemedicina; API REST e webhook per l'e-commerce della farmacia; plugin WordPress/Shopify; elenco delle farmacie aderenti |

## Funzionalità per rilascio

L'MVP deve battere WhatsApp al banco. La V2 dà i motivi per pagare e restare, la V3 rende scomodo passare a un concorrente.

### MVP

**Dashboard della farmacia (web)**

- Coda ordini a colonne, con un avviso sonoro a ogni nuovo ordine
- Verifica della ricetta: NRE e codice fiscale si copiano nel gestionale con un clic
- Disponibilità: pronto / in arrivo dal grossista con orario / equivalente da confermare
- Chat legata al singolo ordine, importo comunicato prima della consegna
- Lista delle consegne del giorno, firma o foto alla consegna, consegna a un delegato
- Più operatori, con traccia di chi ha fatto cosa
- QR code e link per collegare i pazienti

**Paziente, con il nome della farmacia (link web, WhatsApp, app)**

- Link web d'ordine con nome e logo della farmacia; WhatsApp integrato sul numero della farmacia; app unica personalizzata dopo il QR code, con account e sincronizzazione
- Scorte con avviso di riordino (già presente)
- Ordine da ricetta: NRE + codice fiscale o foto del promemoria, più ricette nello stesso ordine
- Prodotti liberi in testo, ritiro o consegna con fascia oraria
- Stato dell'ordine via notifica o WhatsApp
- Profili familiari
- Solo pagamento alla consegna

### V2

- Condivisione delle terapie con la farmacia, con consenso per singola voce, e avvisi proattivi del farmacista
- Catalogo dei prodotti senza ricetta della farmacia
- Prenotazione dei servizi (tamponi, pressione, ECG)
- App dedicata negli store con il nome della farmacia, pubblicata con il suo account (premium)
- Statistiche per la farmacia; agente AI (smistamento, piano della giornata, giri di consegna, riordini proattivi); prenotazione del rider Glovo On-Demand dalla dashboard
- Telefarmacia: prenotazione delle prestazioni, referti nell'app, consulenza a distanza del farmacista
- Widget JS per il sito della farmacia: ordina con ricetta, prenota un servizio, stato dell'ordine, contatto rapido
- Gestione delle ricette non elettroniche e delle deleghe

### V3

- Integrazione con il gestionale di farmacia (disponibilità in tempo reale, ordine scaricato direttamente)
- Integrazione con altri partner di consegna oltre Glovo; scelta automatica del canale
- Telefarmacia: televisita assistita, telemonitoraggio da dispositivi certificati, integrazione con i centri servizi di telemedicina
- API REST e webhook per l'e-commerce delle farmacie, plugin WordPress/Shopify, widget Riordina con accesso paziente
- Funzioni per catene e gruppi
- Elenco delle farmacie aderenti, attivabile dal paziente (per esempio per la farmacia di turno), senza dirottare i pazienti collegati
- Pagamento online, se il legale lo approva

## Privacy, dispositivo medico e rischi

Il rischio principale non è tecnico: è l'adozione da parte dei pazienti. Seguono privacy e normativa, che vanno impostate fin dall'inizio.

| Rischio | Cosa fare |
| --- | --- |
| I pazienti non usano l'app con regolarità | Validare prima con i pazienti cronici e chi li assiste. Il farmacista spinge l'adozione al banco |
| Dati sanitari (categoria particolare GDPR) | Valutazione d'impatto (DPIA), hosting nell'UE, conservazione definita, registro degli accessi |
| Chi è titolare dei dati | Probabilmente la farmacia per gli ordini, con voi responsabili; voi per l'armadietto personale. Da formalizzare |
| Condivisione delle terapie | Consenso esplicito, per singola voce, revocabile in qualsiasi momento |
| Dispositivo medico (MDR 2017/745) | Promemoria e scorte sì; dosi, interazioni e consigli clinici automatici no. Ogni consiglio passa dal farmacista |
| Vendita a distanza | Pagamento alla consegna nell'MVP. Prenotazione e consegna sempre fatte dalla farmacia |
| Diffidenza delle farmacie verso le piattaforme | Promessa scritta nel contratto: nessun dirottamento dei pazienti, dati esportabili, nome della farmacia in primo piano. Sondare Federfarma provinciale come canale |
| Concorrenza di Pharmap e Poste | Non competere sulla consegna veloce, ma su terapie, scorte e riordino |

## Piano di validazione

L'obiettivo è avere almeno 3 farmacie pronte a pagare e un uso settimanale dei pazienti prima di sviluppare il prodotto completo.

1. **Interviste alle farmacie (15–20):** indipendenti e di gruppo, in città e in provincia.
2. **Interviste ai pazienti (10–15):** pazienti cronici e figli che gestiscono i farmaci dei genitori.
3. **Test manuale (4 settimane, 2–3 farmacie):** dashboard minima e Armadietto con riordino. Il resto lo fate voi a mano. Si contano ordini, tempi e riordini.
4. **Prevendita:** lettera d'intenti o primo mese pagato. Se nessuno paga €49, il problema non è abbastanza doloroso.
5. **Canale:** incontro con un'associazione provinciale di Federfarma o con un gruppo di acquisto.

### Domande per le farmacie

- Quante richieste ricevete a settimana via WhatsApp o telefono? Chi le gestisce, e quanto tempo ci perde?
- Consegnate già a domicilio? Con chi, a quale costo e chi lo paga?
- Quanti pazienti cronici seguite in modo continuativo? Come sapete quando finiscono una terapia?
- Quali strumenti digitali usate oggi (gestionale, e-commerce, app) e quanto li pagate?
- Cosa vi farebbe cambiare da WhatsApp a un altro strumento? Cosa vi frenerebbe?
- Proporreste un'app ai vostri pazienti al banco? A quali?
- A €49 al mese lo provereste? E a €99?

### Domande per i pazienti

- Come sapete oggi quando un farmaco sta per finire? Vi è mai capitato di restare senza?
- Come ordinate oggi alla farmacia? Cosa vi dà fastidio?
- Gestite farmaci per qualcun altro? Per chi?
- Se la vostra farmacia vi desse un'app per scorte e ordini, la usereste ogni settimana? Cosa vi convincerebbe?
- Vi sentireste a vostro agio a condividere le terapie con il farmacista?

## Questioni aperte

**Da far verificare a un legale esperto di diritto farmaceutico**

- [ ] Il flusso prenotazione + consegna rientra nella prenotazione online e non nella vendita a distanza?
- [ ] È lecito un pagamento online anticipato per i farmaci con ricetta?
- [ ] Un abbonamento della farmacia alla piattaforma pone problemi rispetto alle regole della professione? E una commissione per ordine?
- [ ] Ruoli GDPR: titolare, responsabile, contitolari tra farmacia e piattaforma
- [ ] Le funzioni di Armadietto restano fuori dal regolamento sui dispositivi medici?

**Da decidere tra soci**

- [ ] Armadietto nella società: conferimento o licenza
- [ ] Intestazione della società o della partita IVA, compatibile con il contratto Hinto
- [ ] Ruoli e quote: sviluppo, vendita alle farmacie, operatività
- [ ] Nome della piattaforma, cioè il nuovo nome di Armadietto: compare negli store, da decidere presto
- [ ] Città di partenza per le prime farmacie pilota

## Fonti

- [Agenda Digitale — art. 112-quater Codice del farmaco](https://www.agendadigitale.eu/?p=173016)
- [Dr. Max — farmaci con ricetta online](https://www.drmax.it/farmaci-con-ricetta-online-cosa-si-puo-fare-e-cosa-no-secondo-la-normativa-italiana)
- [Regione Emilia-Romagna — farmacia e vendita online](https://imprese.regione.emilia-romagna.it/semplificazione-e-sportello-unico/schede-attivita-imprenditoriali/farmacia-e-vendita-online-di-farmaci/farmacia_e_vendita_online_di_farmaci_scheda_informativa.pdf)
- [Altroconsumo — delivery farmaci](https://www.altroconsumo.it/salute/farmaci/speciali/delivery-farmaci)
- [Altroconsumo — ricetta medica](https://www.altroconsumo.it/salute/diritti-in-salute/speciali/ricetta-medica)
- [FinanzaOnline — Poste e Pharmap](https://www.finanzaonline.com/?p=633951)
- [StartupItalia — Pharmap](https://startupitalia.eu/104190-20190207-pharmap-delivery-medicinali-farmacia)
- [StartupItalia — Farmakom](https://startupitalia.eu/economy/economia-digitale/farmakom-le-commerce-farmaceutico-chiavi-in-mano/)
- [iFarmaDigital su App Store](https://apps.apple.com/it/app/ifarmadigital/id1574161404?l=en-GB)

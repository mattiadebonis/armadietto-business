"""Rigenera ../index.html dai due prototipi. Uso: python3 genera.py"""
import base64, os
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))

def body(path):
    s = open(path, encoding='utf-8').read()
    return s[s.index('<body>') + 6:s.rindex('</body>')].strip()

farm = body(os.path.join(ROOT, 'prototipo-dashboard-farmacia', 'index.html'))
paz = body(os.path.join(ROOT, 'prototipo-app-paziente', 'index.html'))
bridge = open(os.path.join(HERE, 'collegamento-farmacia.js'), encoding='utf-8').read()

anchor = 'seedInbox(); S.iSel = null;'
assert farm.count(anchor) == 1, 'punto di aggancio non trovato nella dashboard'
farm = farm.replace(anchor, bridge + anchor)
auto = "setTimeout(() => { c.msgs.push({ me: false, t: 'Grazie mille, chiarissimo.', at: now() }); render(); }, 6000);"
assert farm.count(auto) == 1, 'risposta automatica del consulto non trovata'
farm = farm.replace(auto, 'if (!c.ext) ' + auto)

HEAD = ('<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
        '<script>window.LINKED=true;try{if(!window.claude&&parent.claude)window.claude=parent.claude}catch(e){}</script>'
        '<style>:root{color-scheme:light}body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style></head><body>')
b64 = lambda s: base64.b64encode((HEAD + s + '</body></html>').encode('utf-8')).decode('ascii')
page = open(os.path.join(HERE, 'pagina.html'), encoding='utf-8').read().replace('%%FARM%%', b64(farm)).replace('%%PAZ%%', b64(paz))
WRAP = '<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>:root{color-scheme:light}body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style></head><body>\n'
open(os.path.join(HERE, '..', 'index.html'), 'w', encoding='utf-8').write(WRAP + page.strip() + '\n</body></html>\n')
print('index.html rigenerato')

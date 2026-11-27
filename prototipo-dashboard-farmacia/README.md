# Prototipo della dashboard della farmacia

Prototipo cliccabile della dashboard web per il farmacista: un solo file, `index.html`, senza dipendenze da installare. I dati sono di esempio (Farmacia Rossi, pazienti inventati).

## Cosa contiene

- **In arrivo** (colonna a sinistra): messaggi da WhatsApp, app e link e pagamenti. Claude li legge e li smista in bozze d'ordine, domande sui farmaci o domande pratiche; il farmacista decide e risponde da lì.
- **Ordini** (al centro): coda a colonne (Nuovi, Da pagare, In preparazione, Pronti, In consegna) con il dettaglio in un pannello laterale. Dopo la verifica parte un link di pagamento; l'ordine si prepara solo a pagamento confermato.
- **Giro di consegna**: fattorino della farmacia oppure rider partner tipo Glovo, con prenotazione, codice di ritiro e tracking simulati.
- **Chat con Claude** (a destra): legge i dati della dashboard, propone azioni da approvare e non dà consigli clinici.
- **Simula arrivo**: fa arrivare un ordine, un messaggio WhatsApp o un pagamento.

Nel file c'è anche il codice dell'app del paziente e del widget per il sito della farmacia, al momento non collegato a nessun tab.

## Come aprirlo

Apri `index.html` nel browser. La chat e la lettura dei messaggi usano Claude solo quando la pagina è aperta come artifact su claude.ai; fuori da lì la dashboard funziona con dati di esempio e la chat mostra un avviso.

## Da verificare prima del prodotto

Pagamento online anticipato dei farmaci con ricetta, consegna con rider esterni e risposte scritte alle domande sui farmaci: sono tra le domande per il legale elencate nel [README](../README.md).

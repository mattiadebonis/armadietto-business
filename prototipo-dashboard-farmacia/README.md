# Prototipo della dashboard della farmacia

Prototipo cliccabile della dashboard web per il farmacista: un solo file, `index.html`, senza dipendenze da installare. I dati sono di esempio (Farmacia Rossi, pazienti inventati).

## Cosa contiene

- **In arrivo** (colonna a sinistra): messaggi da WhatsApp, app e link, consulti e pagamenti. Claude li legge e li smista in bozze d'ordine, consulti o domande pratiche; il farmacista decide.
- **Ordini** (al centro): coda a colonne (Nuovi, Da pagare, In preparazione, Pronti, In consegna) con il dettaglio in un pannello laterale. Dopo la verifica parte un link di pagamento; l'ordine si prepara solo a pagamento confermato.
- **Giro di consegna**: fattorino della farmacia oppure rider partner tipo Glovo, con prenotazione, codice di ritiro e tracking simulati.
- **Telefarmacia**: consulti dei pazienti per messaggio, a cui risponde il farmacista.
- **Chat con Claude** (a destra): legge i dati della dashboard, propone azioni da approvare e non dà consigli clinici.
- **Simula arrivo**: fa arrivare un ordine, un messaggio WhatsApp, un consulto o un pagamento.

## Interfaccia e modalità agente

Lo switch nell'intestazione passa da un modo all'altro.

- **Interfaccia**: la dashboard descritta sopra.
- **Agente**: Claude lavora la coda al posto della farmacista e occupa tutta la pagina.
  - **Fa da solo:** smista In arrivo, crea le bozze d'ordine, controlla il magazzino e propone il totale, risponde alle domande pratiche e manda i promemoria di pagamento.
  - **Serve te:** le decisioni che restano alla farmacista, cioè la verifica delle ricette, i consulti e i messaggi senza risposta pronta.
  - **Ti suggerisco:** cose che fa solo con un sì, come il giro del fattorino, il rider e i messaggi di riordino.
  - **Fatto:** l'elenco delle operazioni con l'orario.
  - **Dettagli:** ordini, consulti e messaggi si aprono in un pannello laterale.
  - **Pausa:** tornando all'interfaccia l'agente va in pausa.

Le operazioni dell'agente seguono regole fisse scritte nella pagina. Claude scrive il briefing e risponde alle istruzioni nella chat. L'agente non verifica ricette e non dà consigli clinici.

Nel file c'è anche il codice dell'app del paziente e del widget per il sito della farmacia, al momento non collegato a nessun tab.

## Come aprirlo

Apri `index.html` nel browser. La chat e la lettura dei messaggi usano Claude solo quando la pagina è aperta come artifact su claude.ai; fuori da lì la dashboard funziona con dati di esempio e la chat mostra un avviso.

## Da verificare prima del prodotto

Pagamento online anticipato dei farmaci con ricetta, consegna con rider esterni e risposte scritte ai consulti: sono tra le domande per il legale elencate nel [README](../README.md).

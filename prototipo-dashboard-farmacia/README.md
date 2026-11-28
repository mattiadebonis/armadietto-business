# Prototipo della dashboard della farmacia

Prototipo cliccabile della dashboard web per il farmacista: un solo file, `index.html`, senza dipendenze da installare. I dati sono di esempio (Farmacia Rossi, pazienti inventati).

## Cosa contiene

Tre tab: **Home**, **Ordini**, **Telefarmacia**. La pagina si apre su Home.

- **Home**: Claude lavora la coda al posto della farmacista e le lascia il piano di oggi.
  - **Fa da solo:** smista In arrivo, crea le bozze d'ordine, controlla il magazzino e propone il totale, risponde alle domande pratiche e manda i promemoria di pagamento.
  - **Il piano di oggi:**
    - **Riepilogo:** contatori e barra di avanzamento.
    - **Adesso:** schede intere con icona, motivo dell'urgenza e azioni.
    - **Entro oggi** e **Quando puoi:** righe compatte che si aprono al clic.
    - **Voci:** verifica delle ricette, consulti, messaggi senza risposta pronta, giro del fattorino, rider e riordini. I suggerimenti si fanno solo con un sì.
  - **Chat con Claude:** sempre in fondo, per chiedere o dare istruzioni.
  - **Cosa ha fatto Claude:** l'elenco delle operazioni con l'orario.
  - **Dettagli:** ordini, consulti e messaggi si aprono in un pannello laterale.
  - **Sempre attivo:** Claude parte all'apertura e continua a lavorare anche dagli altri tab. Si mette in pausa o si ferma da Home.
- **Ordini**: coda a colonne (Nuovi, Da pagare, In preparazione, Pronti, In consegna) con il dettaglio in un pannello laterale. Dopo la verifica parte un link di pagamento; l'ordine si prepara solo a pagamento confermato.
- **Giro di consegna** (dentro Ordini): fattorino della farmacia oppure rider partner tipo Glovo, con prenotazione, codice di ritiro e tracking simulati.
- **Telefarmacia**: consulti dei pazienti per messaggio, a cui risponde la farmacista.
- **In arrivo**: pannello che si apre da sinistra con il pulsante in alto. Raccoglie messaggi da WhatsApp, app e link, consulti e pagamenti, già letti e smistati da Claude.
- **Simula arrivo**: nella barra del prototipo, sopra l'intestazione della farmacia. Fa arrivare un ordine, un messaggio WhatsApp, un consulto o un pagamento.

Le operazioni di Claude in Home seguono regole fisse scritte nella pagina. Claude legge i messaggi, scrive il briefing e risponde nella chat. Non verifica ricette e non dà consigli clinici.

Nel file c'è anche il codice dell'app del paziente e del widget per il sito della farmacia, al momento non collegato a nessun tab.

## Come aprirlo

Apri `index.html` nel browser. La chat, la lettura dei messaggi e il briefing usano Claude solo quando la pagina è aperta come artifact su claude.ai; fuori da lì la dashboard funziona con dati di esempio.

## Da verificare prima del prodotto

Pagamento online anticipato dei farmaci con ricetta, consegna con rider esterni e risposte scritte ai consulti: sono tra le domande per il legale elencate nel [README](../README.md).

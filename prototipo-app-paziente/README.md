# Prototipo dell'app del paziente

Prototipo cliccabile dell'app che il paziente usa dopo aver collegato la sua farmacia. È un solo file, `index.html`, senza dipendenze da installare. I dati sono di esempio: Lucia De Santis, che assiste anche il papà Giorgio, collegata a Farmacia Rossi.

## Cosa contiene

- **Oggi**: ordini in corso, consulti aperti, terapie che finiscono nei prossimi 10 giorni con "Riordina", la farmacia.
- **Armadietto**: scorte e scadenze di Lucia e di Giorgio. Ogni terapia si condivide con la farmacia una per una, e da ogni terapia si apre un consulto. "Aggiungi una confezione" simula la lettura della scatola.
- **Ordini**:
  - **Ricette:** il codice NRE si scrive a mano o si legge dalla foto del promemoria. Si possono mettere più ricette e altri prodotti senza ricetta. "Chiedila al medico" prepara un messaggio da copiare.
  - **Ritiro o consegna:** si sceglie il ritiro in farmacia o la consegna con fascia oraria.
  - **Pagamento:** arriva dopo la verifica della ricetta.
  - **Ritiro e consegna:** codice di ritiro o di consegna. A ordine chiuso, Armadietto aggiorna le scorte.
  - **Casi particolari:** con la ricetta cartacea serve il ritiro in farmacia; il farmaco da frigo lo porta solo il fattorino della farmacia.
- **Farmacia**:
  - **Telefarmacia:** consulti scritti con la farmacista, con argomento, farmaco e stato.
  - **Messaggi:** per ordini e domande pratiche.
  - **Info:** orari, contatti e cosa vede la farmacia.
- **Primo accesso**: QR code al banco, numero di telefono con codice SMS, consenso terapia per terapia.

Il pannello a destra fa le mosse della farmacia: verifica, link di pagamento, ordine pronto, fattorino o rider, consegna, risposta ai consulti, avviso di scorta.

Nello store l'app ha il nome della piattaforma; dopo il QR code il paziente vede solo la sua farmacia.

## Come aprirlo

Apri `index.html` nel browser.

## Da verificare prima del prodotto

Pagamento anticipato, rider esterni per i farmaci con ricetta e risposte scritte della telefarmacia: sono tra le domande per il legale elencate nel [README](../README.md).

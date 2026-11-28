# Prototipo farmacia e paziente

I due prototipi affiancati e collegati: a sinistra la [dashboard della farmacia](../prototipo-dashboard-farmacia/), a destra l'[app del paziente](../prototipo-app-paziente/). Quello che fai da una parte arriva dall'altra.

## Cosa passa tra le due

- **Ordine:** l'ordine fatto dall'app compare tra i Nuovi della dashboard.
- **Verifica:** quando la farmacista indica disponibilità e totale, sul telefono arriva la richiesta di pagamento.
- **Pagamento:** quando Lucia paga, la dashboard lo registra e l'ordine passa in preparazione, oppure è subito pronto se i farmaci sono già disponibili.
- **Pronto, consegna, chiuso:** ogni passaggio aggiorna il telefono, con il nome del rider e l'orario quando c'è.
- **Telefarmacia:** il consulto dall'app arriva in In arrivo e si apre in Telefarmacia. Le risposte della farmacista tornano nel consulto sul telefono; repliche e chiusura di Lucia tornano alla dashboard.
- **Messaggi:** i messaggi dall'app arrivano in In arrivo e la risposta compare nella chat del telefono.
- **Terapie:** le terapie che Lucia condivide aggiornano i pazienti della farmacia.

In alto ci sono "Avviso di scorta sul telefono" e "Ricomincia". Anche qui la dashboard ha lo switch tra Interfaccia e Agente.

## Come funziona

`index.html` contiene le due pagine e le carica in due riquadri. I due riquadri si scambiano messaggi tramite la pagina che li contiene. I file delle cartelle `prototipo-dashboard-farmacia` e `prototipo-app-paziente` restano utilizzabili da soli. Questo file è generato: se cambi uno dei due prototipi, rigeneralo con `python3 sorgenti/genera.py`. In `sorgenti` ci sono la pagina che affianca i due riquadri e il codice che collega la dashboard all'app.

## Come aprirlo

Apri `index.html` nel browser. La chat e l'agente usano Claude solo quando la pagina è aperta come artifact su claude.ai.

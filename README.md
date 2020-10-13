<<<<<<< HEAD
# BeerHere
L'applicazione da la possibilità, ai soli utenti registrati, di localizzarsi e cercare birrerie in un raggio prestabilito.

## **Requisiti**
- [x] Il servizio REST implementato deve interfacciare almeno due servizi REST *esterni*, cioè non su localhost
- [x] Almeno uno dei servizi REST esterni deve essere *commerciale* (es: twitter, google, facebook, pubnub, parse, firbase etc)
- [x] Almeno uno dei servizi REST esterni deve essere acceduto con oauth
- [x] Si deve usare AMQP (RabbitMQ) (o simili es MQTT)
- [x] Si devono usare Websocket
- [x] Il progetto deve essere su GITHUB
- [x] Le API del servizio REST implementato devono essere documentate su GITHUB

## **Avvio**

- Per installare le dipendenze eseguire `npm install`, verranno lette dal file *package.json* e installate.

- Per avviare il server eseguire `npm start`.

- RabbitMQ(porta 5672) e WebSocket(porta 8080) devono essere in esecuzione su _localhost_.

- La connessione a MongoDB avviene tramite mongoose.connect(mongodb+srv://username:test@cluster0-0000.mongodb.net/test?retryWrites=true&w=majority).
  
- Per la parte asincrona eseguire `node receiver.js` nella directory rabbitMQ.

## **REST API**

- Google Api:
  - Geocode: tramite una get passando l'indirizzo del luogo richiesto ci ritorna le sue informazioni dalle quali verranno prese latitudine e longitudine.
  
  - NearbySearch: si effettua una richiesta passando latitudine, longitudine, il raggio d'interesse per trovare un insieme di birrerie nel raggio prestabilito. 


## **OAUTH**

- Google Login: Implementato con Passport, richiede l'autenticazione e restituisce le informazioni base del proprio profilo(username, id), e queste informazioni vengono memorizzate come .json nella collection users del database.

## **Funzionalità**

- Web Socket: In `app.js` viene inizializzato il server sulla porta 3000, e si connette al proprio server. Prende il messaggio facendo il parsing JSON e lo inoltra, tramite la funzione `broadcast`, a tutti i client connessi. In `chat.hbs` viene gestito l'inivio del messaggio alla WebSocket tramite la funzione `send` e lo visualizza tramite la funzione `onmessage`. 

- RabbitMQ: In `app.js` viene generata, per la get request di quando si entra nella community, la connessione e creazione del canale di comunicazione con il reciever, che poi provvederà ad inviare il messaggio tramite la funzione `sendToQueue`. Il reciever, una volta avviato, riceverà sulla propria console, tutte le richieste fatte all'interno della nostra applicazione tramite la funzione `consume`. 

=======
# progettoreti
Progetto Reti di Calcolatori 2020

per iniziare --> "npm start"
>>>>>>> b745679bd4c3d75f80133994321348ff5ec778a5

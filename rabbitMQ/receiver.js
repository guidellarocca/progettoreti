
const amqp = require('amqplib/callback_api');


amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
        const queue = 'FirstQueue';

        ch.assertQueue(queue,{durable:false});
        console.log('attesa del messaggio in coda');
        ch.consume(queue, (message) => {
            console.log('Messaggio ricevuto, + 1');
        }, {noAck: true});
    });
});



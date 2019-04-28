const kafka = require('kafka-node');
const socketIO = require('socket.io')(8080) // run socket.io di port 8080
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient();
const io = socketIO;
const consumer = new Consumer(
    client,
    [
        { topic: 'nodejs', partition: 0}
    ],
    {
        autoCommit: true,
        encoding: 'utf8',
    }
);
    consumer.on('message', function (message) {
        console.log('Receive Message from kafka :'+message.value+' Topic :'+message.topic);
        if(message.topic == 'nodejs'){
            io.send(message.value); // push message dari kafka ke client melalui socket IO
        }
    });

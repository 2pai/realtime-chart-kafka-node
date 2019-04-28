realtime-chart-kafka-node
==========================
menampilkan chart secara realtime dengan kafka dan socket io

###Instalation & run
```
npm install
node index.js
```

###Push data to chart 
mengirim data ke chart dapat menggunakan command
```
$ kafka-console-producer --broker-list localhost:9092 --topic nodejs
```
default topic : nodejs
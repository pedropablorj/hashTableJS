var HasTable = require('./HashTable');

var myHT = new HasTable(30);

myHT.insert('Dean','dean@gemail.com');
myHT.insert('Megan','megan@gemail.com');
myHT.insert('Dane','dane@gemail.com');
myHT.insert('Dean','deanmachine@gemail.com');


console.log(myHT.retriveAll());
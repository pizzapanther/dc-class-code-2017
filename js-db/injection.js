var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});

var db = pgp({database: 'test'});

var biz = {name: 'Lard Lad Donuts2', address: '123 Somewhere'};
var query = "INSERT INTO restaurant VALUES(default, ${name}, ${address})";

console.log(query);
db.result(query, biz)
  .then(function (result) {
    console.log(result);
    //pgp.end();
  });

var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient

let db

MongoClient.connect('mongodb://emile:K4rlM4rx@ds121461.mlab.com:21461/esperanza', (err, client) => {
  if (err) return console.log(err)
  db = client.db('esperanza') // whatever your database name is
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  let x = db.collection("Arbeiter").find().toArray(function(err, results) {
    res.json(results)
  })
});

router.post('/', function(req, res) {
  db.collection('Arbeiter').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})
module.exports = router;

let express = require('express');
let router = express.Router();
const MongoClient = require('mongodb').MongoClient

let db

MongoClient.connect('mongodb://emile:K4rlM4rx@ds121461.mlab.com:21461/esperanza', (err, client) => {
  if (err) return console.log(err)
  db = client.db('esperanza')
})

router.get("/", function(req, res, next) {
  db.collection("Aufgaben").find().toArray(function(err, results) {
    res.json(results)
  })
  console.log("hier sind die aufgabe");
})

router.post("/", function(req, res) {
  db.collection("Aufgaben").save(req.body, (err, results) => {
    if (err) return console.log(err);
    console.log("saved task to db");
    res.redirect("/")
  })
})

module.exports = router;

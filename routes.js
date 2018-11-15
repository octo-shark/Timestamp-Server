const express = require('express');
const router = express.Router();
const db = require('./database/index.js');

router.get('/db/:userID', (req, res) => {
  db.exportUserData(req.params.userID, (err, data) => {
    if(err){
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

router.post('/db', (req, res)=> {
  db.insertTimestamp(req.query.user_id, req.query.activity_id, req.query.timestamp_start, req.query.timestamp_end, (err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  })
})

module.exports = router;
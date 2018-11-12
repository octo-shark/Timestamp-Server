const express = require('express');
const router = express.Router();
const db = require('./database/index.js');

router.get('/db', (req, res) => {
  db.exportUserData('chris@gmail.com', (err, data) => {
    if(err) console.log(err);
    console.log('attempting to retrieve data: ', data);
    res.status(200).json(data);
  })
})

router.post('/db', (req, res)=> {
  db.insertTimestamp(req.query.user_id, req.query.activity_id, req.query.timestamp_start, req.query.timestamp_end, (err, data) => {
    if(err) console.log(err);
    res.status(201).send(`timestamp saved successfully: ${data}`);
  })
})

module.exports = router;
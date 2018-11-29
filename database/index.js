const mongoose = require('mongoose');
const uri = require('../config');
const db = mongoose.connection;

mongoose.connect(uri, { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connection successful')
});

const Schema = mongoose.Schema;
const userTimestamp = new Schema({
  user_id: String,
  activity_id: Number,
  timestamp_start: Number,
  timestamp_end: Number,
});
const Timestamp = mongoose.model('TimeStamp', userTimestamp);

//add new timestamp document
const insertTimestamp = (userId, activityId, start, stop, callback) => {
  if(!(userId && activityId && start && stop)){
    callback('encountered invalid timestamp data', null);
  } else {
    let timestamp = new Timestamp({
      user_id: userId,
      activity_id: activityId,
      timestamp_start: start,
      timestamp_end: stop,
    });
    timestamp.save();
    callback(null, timestamp);
  }
}

 //export user data based on user ID
const exportUserData = async (userId, callback) => {
    let userData = await Timestamp.find({'user_id': userId});
    userData.length ? callback(null, userData) : callback('invalid userId', null);
}

module.exports.exportUserData = exportUserData;
module.exports.insertTimestamp = insertTimestamp;
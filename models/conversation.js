const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  name: String,
  participant: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  messages: [new mongoose.Schema({
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    content: String,
    links: [{
      extname: String,
      name: String,
      path: String
    }],
    date_time: {
      type: Date,
      default: Date.now()
    },
    unread: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  })]
});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = {
  Conversation,
  conversationSchema
}
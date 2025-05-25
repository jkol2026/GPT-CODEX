const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  whatsapp: { type: String, required: true },
  subject: { type: String, required: true },
  serviceType: { type: String, required: true },
  deadline: { type: String, required: true },
  timeZone: { type: String, required: true },
  description: { type: String },
  file: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);

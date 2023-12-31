const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OrdersSchema = new Schema({
    products: [CartItemSchema],
    customer_name: String,
    customer_email: {
      type: String,
      required: true
    },
    delivery_address: {
      street: {type: String, required: 'Street is required'},
      city: {type: String, required: 'City is required'},
      state: {type: String},
      pincode: {type: String, required: 'Pin Code is required'},
      country: {type: String, required: 'Country is required'}
    },
    created: {
      type: Date,
      default: Date.now
    },
    user: {
        type: mongoose.Schema.ObjectId, 
        ref: 'User'
    }
  })
  

module.exports = mongoose.model('Order', OrdersSchema);
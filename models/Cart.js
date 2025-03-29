const mongoose = require('mongoose'); //!mdbgum

// Declare the Schema of the Mongo model
var CartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    products: [
        {
            cartItem: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
}, { timestamps: true });

//Export the model
module.exports = mongoose.model('Cart', CartSchema);
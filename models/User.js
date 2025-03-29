const mongoose = require('mongoose'); //!mdbgum

// Declare the Schema of the Mongo model
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        default: "tp.HCM, Việt Nam"
    },
}, { timestamps: true });

//Export the model
module.exports = mongoose.model('User', UserSchema);
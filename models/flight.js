const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: String,
    airport: {
        type: String,
        },
    flightNo: {
        type: Number, 
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date, 
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
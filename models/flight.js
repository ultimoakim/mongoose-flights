const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
    },
    arrival: {
        type: Date,
    },
}, {
    timestamps: true
});

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
    destinations: [destinationSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
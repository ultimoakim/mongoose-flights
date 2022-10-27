const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight',
    },
}, {
    timestamps: true
});

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
    tickets: [ticketSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
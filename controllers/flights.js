const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    console.log(req.body);
    if (req.body.departs === '') {
        req.body.departs = new Date().setFullYear(new Date().getFullYear() + 1);
    }
    if (req.body.flightNo === '') {
        req.body.flightNo = 9000;
    }
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
}
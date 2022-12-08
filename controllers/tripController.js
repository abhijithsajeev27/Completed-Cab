const { Model } = require("sequelize");
const { formatDate } = require("date-utils-2020");
// const Movie = require('../model/movie');
const Trip = require("../model/models").Trip;
const fare = require("./mapController").fare;
const map = require("../model/map").map;

module.exports.index = (req, res, next) => {
  Trip.findAll().then((cabs) => {
    res.render("trip-Detail", {
      data: cabs,
    });
  });
};
module.exports.create = (req, res, next) => {
  res.render("trip-create");
};

module.exports.createPost = (req, res, next) => {
  req.session.source = req.body.source;
  req.session.destination = req.body.destination;
  Trip.create({
    carno: req.body.carno,
    type: req.body.type,
    source: req.body.source,
    date: req.body.date,
    destination: req.body.destination,
    time: req.body.time,
    mode: req.body.mode,
    PassengerId: req.session.loggedPassenger,

    bookingdate: formatDate(new Date(), "yyyy/MM/dd"),
  }).then((user) => {
    let source = req.body.source;
    let destination = req.body.destination;
    map
      .findOne({
        where: {
          source: source,
          destination: destination,
        },
      })
      .then((farefromdb) => {
        console.log(farefromdb);
        // return res.json(farefromdb);
        res.render('payment',{data:farefromdb})
      });
  });
};

module.exports.update = (req, res, next) => {
  Trip.findByPk(req.params.id).then((user) => {
    res.render("tripUpdate", {
      data: user,
    });
  });
};

module.exports.updatePost = async (req, res, next) => {
  var user = await Trip.findByPk(req.params.id);
  await Trip.update(
    {
      carno: req.body.carno,
      type: req.body.type,
      source: req.body.source,
      destination: req.body.destination,
      date: req.body.date,
      time: req.body.time,
      PassengerId: req.body.PassengerId,
      bookingdate: new Date().getda,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.redirect("/trip");
};

module.exports.delete = async (req, res, next) => {
  let id = req.params.id;
  let trip = await Trip.findByPk(id);
  if (trip) {
    await Trip.destroy({
      where: {
        id: id,
      },
    });
    res.redirect("/trip/");
  }
};

// const Movie = require('../model/movie');
const Passenger = require("../model/models").Passenger;

module.exports.index = (req, res, next) => {
  Passenger.findAll().then((passengers) => {
    res.render("user-Details", {
      data: passengers,
      // identity: req.identity.user
    });
  });

  // res.render('passengerHome')
};
module.exports.create = (req, res, next) => {
  res.render("passenger-create");
};

module.exports.createPost = (req, res, next) => {
  Passenger.create({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  }).then((user) => {
    res.redirect("/passenger/");
  });
};

module.exports.update = (req, res, next) => {
  Passenger.findByPk(req.params.id).then((user) => {
    res.render("passenger-update", {
      data: user,
    });
  });
};

module.exports.updatePost = async (req, res, next) => {
  var user = await Passenger.findByPk(req.params.id);
  await Passenger.update(
    {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.redirect("/");
};

module.exports.delete = async (req, res, next) => {
  let id = req.params.id;
  let user = await Passenger.findByPk(id);
  if (user) {
    await Passenger.destroy({
      where: {
        id: id,
      },
    });
    res.redirect("/passenger/");
  }
};

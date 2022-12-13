// const Movie = require('../model/movie');
//const { captureRejectionSymbol } = require("mysql2/typings/mysql/lib/Connection");
const { Driver, Car , Trip} = require("../model/models");

module.exports.homepage = (req, res, next) => {
  res.render("homepage");
};

module.exports.index = (req, res, next) => {
  Driver.findAll({
    include: Car,
  }).then((drivers) => {
    console.log(drivers);
    res.render("driver-Details", {
      data: drivers,
      // identity: req.identity.user
    });
  });
};
module.exports.create = (req, res, next) => {
  res.render("driver-create");
};

module.exports.createPost = (req, res, next) => {
  Driver.create({
    fname: req.body.fname,
    lname: req.body.lname,
    vehicleno: req.body.vehicleno,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  }).then((user) => {
    res.redirect("/driver/");
  });
};

module.exports.update = (req, res, next) => {
  Driver.findByPk(req.params.id).then((user) => {
    res.render("driver-update", {
      data: user,
    });
  });
};

module.exports.updatePost = async (req, res, next) => {
  var user = await Driver.findByPk(req.params.id);
  await Driver.update(
    {
      fname: req.body.fname,
      lname: req.body.lname,
      vehicleno: req.body.vehicleno,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.redirect("/driver");
};

module.exports.delete = async (req, res, next) => {
  let id = req.params.id;

  let user = await Driver.findByPk(id);
  if (user) {
    await Driver.destroy({
      where: {
        id: id,
      },
    });
    res.redirect("/driver/");
  }
};
// Selecting Driver
module.exports.driverSelection = (req, res, next) => {
  Driver.findAll({
    include: Car,
  }).then((drivers) => {
    console.log(drivers);
    res.render("driverSelection", {
      data: drivers,
      // identity: req.identity.user
    });
  });
};

// module.exports.driverSelectionNext = async(req, res, next) => {
//   // var driver = await Driver.findByPk(req.params.id);
//   // await Trip.create(
//   //   {
//   //     DriverId: req.body.driver.id,
//   //   },
//   //   {
//   //     where: { id: req.params.id },
//   //   }
//   // );
//   res.redirect("http://localhost/trip/paymentConfirmation")
 

// };
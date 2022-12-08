const admin = require("../model/admin").admin;
const trip = require("../model/models").Trip;
const { Op, sequelize } = require("sequelize");

module.exports.login = (req, res, next) => {
  res.render("passengerLogin");
};

module.exports.loginPost = async (req, res, next) => {
  const { email, password } = req.body;
  const adminFromDb = await admin.findOne({
    where: { email: email, password: password },
  });

  if (adminFromDb == null) {
    return res.render("passengerLogin", {
      message: "No user with this email or password was found.",
    });
  }
  console.log("This is admin ser")
  //console.log(userFromDb);
  // req.session.id = userFromDb.dataValues.id;

  res.render("adminHome");
};

// Report
module.exports.report = async (req, res, next) => {
  res.render("report");

  let booking_date = await trip.findAll({
    where: {
      bookingdate: {
        [Op.eq]: req.body.bookingdate,
      },
    
      
    },

    // kjgdhlagf
  });
  console.log(booking_date);
};
module.exports.reportPost = async (req, res, next) => {
  const { bookingdate } = req.body;

  const date = req.body.bookingdate;

  let booking_date = await trip.findAll({
    where: {
      bookingdate: {
        [Op.eq]: date,
      },
    },

    // kjgdhlagf
  });

  res.render("report", {
    data: booking_date,
    // identity: req.identity.user
  });

  console.log(booking_date);
  // req.session.id = userFromDb.dataValues.id;

  // res.render("adminHome");
};

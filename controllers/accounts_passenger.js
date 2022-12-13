const passenger = require("../model/models").Passenger;

module.exports.login = (req, res, next) => {
  res.render("passengerLogin");
};

module.exports.loginPost = async (req, res, next) => {
  const { email, password } = req.body;
  const loggedPassenger = await passenger.findOne({
    where: { email: email, password: password },
  });

  console.log("line 13", req.session.loggedPassenger);

  if (loggedPassenger == null) {
    return res.render("passengerLogin", {
      message: "No user with this email or password was found.",
    });
  }

  req.session.userId = loggedPassenger.id;



  // res.redirect("/trip/create/");
  res.render("passengerHome");
};

module.exports.register = (req, res, next) => {
  res.render("passenger-create");
};

module.exports.registerPost = async (req, res, next) => {
  const { fname, lname, email, password, phone } = req.body;
  let existingUser = await passenger.findOne({
    where: {
      email: email,
    },
  });
  

  if (existingUser) {
    return res.render("register", { message: "Already registered." });
  }

  await passenger.create({
    fname: fname,
    lname: lname,
    email: email,
    phone: phone,
    password: password,
  });
 
  res.redirect("/passenger/login");
};

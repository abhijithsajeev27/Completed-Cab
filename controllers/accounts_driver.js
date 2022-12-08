const driver = require("../model/models").Driver;

module.exports.login = (req, res, next) => {
  res.render("passengerLogin");
};

module.exports.loginPost = async (req, res, next) => {
  const { email, password } = req.body;
  const userFromDb = await driver.findOne({
    where: { email: email, password: password },
    
  });

  if (userFromDb == null) {
    return res.render("passengerLogin", {
      message: "No user with this email or password was found.",
    });
  }
  console.log(userFromDb);
  req.session.id = userFromDb.dataValues.id;

  res.redirect("/driver");
};

module.exports.register = (req, res, next) => {
  res.render("driver-create");
};

module.exports.registerPost = async (req, res, next) => {
  const { fname, lname, email, vehicleno, password, phone } = req.body;
  let existingUser = await driver.findOne({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return res.render("register", { message: "Already registered." });
  }

  await driver.create({
    fname: fname,
    lname: lname,
    vehicleno: vehicleno,
    email: email,
    phone: phone,
    password: password,
  });

  res.redirect("/driver/login");
};

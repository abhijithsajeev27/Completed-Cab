const express = require("express");
const parser = require("body-parser");
const accounts_driver = require("./routes/accounts_driver");
const passengerRoutes = require("./routes/passengerRoutes");
const driverRoutes = require("./routes/driverRoutes");
const cabRoutes = require("./routes/cabRoutes");
const path = require("path");
const { engine } = require("express-handlebars");
// const authMiddleware = require("./middlewears/authenticationMiddlewears");
const cookieSession = require("cookie-session");
const accounts_passenger = require("./routes/accounts_passenger");
const tripRoutes = require("./routes/tripRoutes");
const adminRoutes = require("./routes/adminRoutes");
// const adminMiddlewears = require('./middlewears/adminMiddlewears')
// const authenticationDriver = require('./middlewears/authenticationDriver')
const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
// app.set('views', path.join(__dirname, 'views'))
const middlewearWorking = require("./middlewears/middlewearWorking")

app.use("/", parser.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "static")));

app.use(
  "/",
  cookieSession({
    name: "session",
    httpOnly: false,
    keys: ["asdghjhgsdahjsgdhjasd"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);


// app.use(dr)
// app.use(middlewearWorking);
app.use(passengerRoutes);
app.use(driverRoutes);
app.use(cabRoutes);
app.use(accounts_passenger);
app.use(accounts_driver);
app.use(tripRoutes);
app.use(adminRoutes);

// Keep auth @ last else it wont work

// app.use(adminMiddlewears);


app.listen(80);

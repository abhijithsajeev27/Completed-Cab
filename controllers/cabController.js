// const Movie = require('../model/movie');
const Cab = require("../model/models").Car;

module.exports.index = (req, res, next) => {
  Cab.findAll().then((cabs) => {
    res.render("cab-Details", {
      data: cabs,
    });
  });
};
module.exports.create = (req, res, next) => {
  res.render("cab-create");
};

module.exports.createPost = (req, res, next) => {
  Cab.create({
    name: req.body.name,
    carno: req.body.carno,
    type: req.body.type,
  }).then((user) => {
    res.redirect("/cab/");
  });
};

module.exports.update = (req, res, next) => {
  Cab.findByPk(req.params.id).then((user) => {
    res.render("cab-Update", {
      data: user,
    });
  });
};

module.exports.updatePost = async (req, res, next) => {
  var user = await Cab.findByPk(req.params.id);
  await Cab.update(
    {
      name: req.body.name,
      carno: req.body.carno,
      type: req.body.type,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.redirect("/cab");
};

module.exports.delete = async (req, res, next) => {
  let id = req.params.id;
  let user = await Cab.findByPk(id);
  if (user) {
    await Cab.destroy({
      where: {
        id: id,
      },
    });
    res.redirect("/cab/");
  }
};

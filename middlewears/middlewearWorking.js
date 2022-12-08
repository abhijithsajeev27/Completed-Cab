const admin = require("../model/admin").admin;
const Driver = require("../model/models").Driver;
const Passenger = require("../model/models").Passenger;


module.exports = async (req, res, next) => {
    auth: async (req, res, next) => {
        req.identity = {
            isAuthenticated: false,
            user: null
        }
        
        // console.log(req.session);
        if (req.url == "/passenger/login" || req.url == "/passenger/register" ||req.url == "/driver" ||req.url == "/admin"  || req.url == "/") {
            return next();
           let  roleUser =1
        }
        if (req.url == "/driver/login" || req.url == "/driver/register" ||req.url == "/driver" ||req.url == "/admin" || req.url == "/") {
            return next();
        }
        if (req.url == "/admin/login" || req.url == "/"||req.url == "/driver" ||req.url == "/admin" ) {
            return next();
        }
        // var role = req.session.role;

        // console.log(role);
        if (roleUser == 1) {

            let id = req.session.userId;
            if (!id || id == null) {
                return res.redirect("/passenger/login")
            }
            let userFromDb = await Passenger.findByPk(id);
          
            if (userFromDb == null) {
                return res.redirect("/passenger/login")
            }
            req.identity.isAuthenticated = true;
            req.identity.Passenger = {
                id: userFromDb.dataValues.id,
                Password: userFromDb.dataValues.Password,
                email: userFromDb.dataValues.email,
                firstname:userFromDb.dataValues.firstname,
                lastname:userFromDb.dataValues.lastname
            }
            return next();
        }


        else if (roleUser == 2) {

            let id = req.session.userId;
            if (!id || id == null) {
                return res.redirect("/driver/login")
            }
            let userFromDb = await Driver.findByPk(id);
      
            if (userFromDb == null) {
                return res.redirect("/driver/login")
            }
            req.identity.isAuthenticated = true;
            req.identity.Driver = {
                id: userFromDb.dataValues.id,
                Password: userFromDb.dataValues.Password,
                email: userFromDb.dataValues.email,
                Name: userFromDb.dataValues.Name

            }
            return next();
        }


        else {
           
            let id = req.session.adminId;
            
            if (!id || id == null) {
                return res.redirect("/admin/login")
            }
            let userFromDb = await admin.findByPk(id);
          
          
            if (userFromDb == null) {
                return res.redirect("/admin/login")
            }
            req.identity.isAuthenticated = true;
            req.identity.admin = {
                id: userFromDb.dataValues.id,
                Password: userFromDb.dataValues.Password,
                email: userFromDb.dataValues.email,
                firstname: userFromDb.dataValues.firstname,
                lastname: userFromDb.dataValues.lastname

            }
            return next();
        }
    }
}

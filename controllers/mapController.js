const map = require("../model/map").map;
const trip = require("../model/models").Trip

module.exports.fare = async (req, res, next) => {
            let source=req.session.source;
            let destination=req.session.destination;
            let price=await map.findOne({
    
            where:{
                source:source,
                destination:destination
                }
    
             })
          
             req.session.bookingFare = price.fare;
             
             console.log("line 17",req.session.bookingFare);
            

             console.log(price)
        res.render('payment',{data:price})
    
    }

module.exports.receipt= async(req, res, next)=>{
    let source=req.session.source;
    let destination=req.session.destination;
    let price=await map.findOne({

    where:{
        source:source,
        destination:destination
        }

     })
     

     req.session.bookingFare =price.fare;

res.render('bookingConfirmation',{data:price})
    // dfkja
    
}
module.exports.passengerReport = async (req, res, next) => {
  let price = await trip.findOne({
    where: {
      PassengerId: req.session.userId,
    },
  });
  console.log("This is price", price);

  res.render("passenger-report", { data: price });
};

module.exports.driverReport = async (req, res, next) => {
    let price = await trip.findOne({
      where: {
        DriverId: 2,
      },
    });
    // console.log("This is price", price);
  
    res.render("driver-report", { data: price });
  };
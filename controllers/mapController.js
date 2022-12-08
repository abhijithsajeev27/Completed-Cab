const map = require("../model/map").map;


module.exports.fare = async (req, res, next) => {
            let source=req.session.source;
            let destination=req.session.destination;
            let price=await fare.findOne({
    
            where:{
                source:source,
                destination:destination
                }
    
             })
             req.session.booingFare ={data:price}
        console.log(price);
        res.render('bookingConfirmation',{data:price})
    
    }

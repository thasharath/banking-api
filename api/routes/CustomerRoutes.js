module.exports = function(app) {
    const { Auth } = require('../middleware/auth');
    const { Customer } = require('../middleware/customer');

    const CustomerController = require("../controllers/CustomerController");
    const BookingController = require("../controllers/BookingController");

    // app.post("/search_services", [Auth, Customer], CustomerController.searchServices);
    // app.get("/beautician/:id", [Auth, Customer], CustomerController.viewBeauticianById);
    app.post("/create_booking", [Auth, Customer], BookingController.createBooking);
    app.post("/make_payment", [Auth, Customer], CustomerController.makePayment);
}
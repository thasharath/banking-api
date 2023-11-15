// module.exports = function(app) {
//     const { Auth } = require('../middleware/auth');
//     const { Beautician } = require('../middleware/admin');
//
//     const BeauticianController = require("../controllers/AdminController");
//
//     // app.post("/create_service_tag", [Auth, Beautician], BeauticianController.createServiceTag);
//     // app.get("/service_tags", [Auth, Beautician], BeauticianController.getAllServiceTags);
//     app.post("/create_service", [Auth, Beautician], BeauticianController.createService);
//     // app.get("/services", [Auth, Beautician], BeauticianController.getAllServices);
//     // app.get("/service/:id", [Auth, Beautician], BeauticianController.getSingleService);
// }
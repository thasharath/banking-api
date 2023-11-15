module.exports = function(app) {
    const { Auth } = require('../middleware/auth');
    const { Admin } = require('../middleware/admin');

    const AdminController = require("../controllers/AdminController");

    app.post("/admin/create_service_provider", [Auth, Admin], AdminController.createServiceProvider);
    // app.post("/admin/create_service_provider", [Auth, Admin], AdminController.createServiceProvider);
    // app.get("/admin/pending_users", [Auth, Admin], AdminController.getPendingUsers);
    // app.put("/admin/approve_user/:id", [Auth, Admin], AdminController.approveUser);
    // app.put("/admin/reject_user/:id", [Auth, Admin], AdminController.rejectUser);
    // app.get("/admin/all_customers", [Auth, Admin], AdminController.getAllCustomers);
    // app.get("/admin/all_payments", [Auth, Admin], AdminController.getAllPayments);
    // app.get("/admin/all_payment_statuses", [Auth, Admin], AdminController.getAllPaymentStatuses);
}
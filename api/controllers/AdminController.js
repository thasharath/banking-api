const { User } = require("../models/UserModel");
// const { Service } = require("../models/ServiceProviderModel.js");
const {Customer} = require("../middleware/customer");
const { Payment } = require("../models/PaymentModel");
const { ServiceProvider } = require("../models/ServiceProviderModel");

// exports.getAllServiceTags = async (req, res) => {
// 	await ServiceTag.find({ beautician: req.user._id })
// 		.then((serviceTags) => {
// 			return res.status(200).json({
// 				success: true,
// 				message: "Received all service tags created!",
// 				data: serviceTags,
// 			});
// 		})
// 		.catch((err) => {
// 			return res.status(422).json({
// 				success: false,
// 				message: err.message,
// 				data: err,
// 			});
// 		});
// };

// exports.createService = async (req, res) => {
//
// 			const newService = new Service(req.body);
//
// 			newService.admin = req.user._id;
//
// 			await newService
// 				.save()
// 				.then(() => {
// 					return res.status(200).json({
// 						success: true,
// 						message: "New service is created!",
// 					});
// 				})
// 				.catch((err) => {
// 					return res.status(422).json({
// 						success: false,
// 						message: err.message,
// 						data: err,
// 					});
// 				});
// };

// Add this to your AdminController.js



// Create a new service provider
exports.createServiceProvider = async (req, res) => {
  const newServiceProvider = new ServiceProvider({
    id: mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description
  });

  await newServiceProvider.save()
    .then((serviceProvider) => {
      return res.status(200).json({
        success: true,
        message: "Service provider created successfully!",
        data: serviceProvider,
      });
    })
    .catch((err) => {
      return res.status(422).json({
        success: false,
        message: err.message,
        data: err,
      });
    });
};


// Fetch all users with a status of 'pending'
exports.getPendingUsers = async (req, res) => {
  await User.find({ status: 'pending' })
    .then((users) => {
      return res.status(200).json({
        success: true,
        message: "Received all pending users!",
        data: users,
      });
    })
    .catch((err) => {
      return res.status(422).json({
        success: false,
        message: err.message,
        data: err,
      });
    });
};

// Approve a user
exports.approveUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { status: 'approved' })
    .then(() => {
      return res.status(200).json({
        success: true,
        message: "User approved successfully!",
      });
    })
    .catch((err) => {
      return res.status(422).json({
        success: false,
        message: err.message,
        data: err,
      });
    });
};

// Reject a user
exports.rejectUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { status: 'rejected' })
    .then(() => {
      return res.status(200).json({
        success: true,
        message: "User rejected successfully!",
      });
    })
    .catch((err) => {
      return res.status(422).json({
        success: false,
        message: err.message,
        data: err,
      });
    });
};

// Fetch all customers
exports.getAllCustomers = async (req, res) => {
	await Customer.find({})
		.then((customers) => {
			return res.status(200).json({
				success: true,
				message: "Received all customers!",
				data: customers,
			});
		})
		.catch((err) => {
			return res.status(422).json({
				success: false,
				message: err.message,
				data: err,
			});
		});
};


// Fetch all payments
exports.getAllPayments = async (req, res) => {
	await Payment.find({})
		.then((payments) => {
			return res.status(200).json({
				success: true,
				message: "Received all payments!",
				data: payments,
			});
		})
		.catch((err) => {
			return res.status(422).json({
				success: false,
				message: err.message,
				data: err,
			});
		});
};


// Fetch all payments with their status
exports.getAllPaymentStatuses = async (req, res) => {
	await Payment.find({}, 'status')
		.then((paymentStatuses) => {
			return res.status(200).json({
				success: true,
				message: "Received all payment statuses!",
				data: paymentStatuses,
			});
		})
		.catch((err) => {
			return res.status(422).json({
				success: false,
				message: err.message,
				data: err,
			});
		});
};


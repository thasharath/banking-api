const { User } = require("../models/UserModel");
const { Service } = require("../models/ServiceProviderModel.js");
const UserRole = require("../enums/UserRole");
const { Payment } = require("../models/PaymentModel");

exports.searchServices = async (req, res) => {
    const searchString = req.body.term;

    if(!searchString) {
        return res.status(404).json({
            success: false,
            message: "Search term is required"
        });
    }

    await Service.find({
        $or: [
            {title: {$regex: searchString, $options: 'i'}},
            {description: {$regex: searchString, $options: 'i'}}
        ]
    }).then((servicesFound) => {
        return res.status(200).json({
            success: true,
            message: "Filtered search results!",
            data: servicesFound
        });
    }).catch((err) => {
        return res.status(422).json({
            success: false,
            message: err.message,
            data: err
        });
    });
};



// Make a payment
exports.makePayment = async (req, res) => {
    const newPayment = new Payment({
        payment_id: mongoose.Types.ObjectId(),
        service_id: req.body.service_id,
        amount: req.body.amount,
        date_time: Date.now(),
        status: 'Pending',
        customer_id: req.user._id
    });

    await newPayment.save()
      .then((payment) => {
          return res.status(200).json({
              success: true,
              message: "Payment made successfully!",
              data: payment,
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

// Fetch all transactions of a customer
exports.getTransactions = async (req, res) => {
    await Payment.find({ customer_id: req.user._id })
      .then((payments) => {
          return res.status(200).json({
              success: true,
              message: "Received all transactions!",
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
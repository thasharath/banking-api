var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PaymentSchema = new Schema({
    payment_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Payment ID field is required."]
    },
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Service ID field is required."]
    },
    amount: {
        type: Number,
        required: [true, "Amount field is required."]
    },
    date_time: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        required: [true, "Status field is required."]
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: [true, "Customer ID field is required."]
    },
    service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: [true, "Service field is required."]
    }
});

const Payment = mongoose.model('Payment', PaymentSchema);
module.exports = {Payment}
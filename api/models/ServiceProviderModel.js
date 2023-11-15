var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ServiceProviderSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "ID field is required."]
    },
    title: {
        type: String,
        required: [true, "Title field is required."]
    },
    description: {
        type: String,
        required: [true, "Description field is required."]
    }
});

const ServiceProvider = mongoose.model('ServiceProvider', ServiceProviderSchema);
module.exports = {ServiceProvider}
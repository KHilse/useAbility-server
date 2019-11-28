let mongoose = require("mongoose");

// Schema
let memberSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 100
	},
	lastname: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 100
    },
    membershiplevel: {
        type: String,
        required: true
    },
    expirationdate: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("Member", memberSchema);
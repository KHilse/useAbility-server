let mongoose = require("mongoose");

// Schema
let equipmentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 100
	},
	type: String,
	number: String,
	status: String,
	lastcheckedoutto: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model("Equipment", equipmentSchema);
require("dotenv");
let mongoose = require("mongoose");

// MongoDB connection string
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/useability", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

module.exports.Member = require("./member");
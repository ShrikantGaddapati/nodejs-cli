const mongoose = require("mongoose");


//schema for customers
const customerSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  phone: { type: String },
  email: { type: String }
});


//exports it so that we can use it.
module.exports = mongoose.model("customers", customerSchema);

//now we have to call this model in index.js
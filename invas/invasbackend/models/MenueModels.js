//menuemodals.js
const mongoose = require("mongoose");

const MenueSchema = mongoose.Schema({
  foodname: {
    type: String,
    required: true,
  },
  foodimg: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  fooddescription: {
    type: String,
    required: true,
  },
  foodtype: {
    type: String,
    required: true,
  },
});

const menueitems = mongoose.model("menue", MenueSchema);
module.exports = menueitems;

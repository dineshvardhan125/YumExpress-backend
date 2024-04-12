const mongoose = require("mongoose");
const firmSchema = new mongoose.Schema({
  firmName: {
    type: String,
    required: true,
    unique: true,
  },
  area: {
    type: String,
    required: true,
  },
  category: {
    type: [
      {
        type: String,
        enum: ["veg", "non-veg"],
      },
    ],
  },
  region: {
    type: [
      {
        type: String,
        enum: ["south-indian", "north-indian", "chineese"],
      },
    ],
  },
  offer: {
    type: String,
  },
  image: {
    type: String,
  },
  venor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "vendor",
    },
  ],
});
const Firm = mongoose.model("Firm", firmSchema);
module.exports = Firm;
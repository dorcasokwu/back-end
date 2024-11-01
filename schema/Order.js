const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    productcart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cart",
    },
    totalAmount: {
      type: String,
    },
    delivery: {
      address: {
        type: String,
      },
    },
    payment: {
      currency: {
        types: String,
      },
      paymentStatus: {
        typs: String,
        default: "not paid",
      },
    },
  },
  {
    timestamps: true,
  }
);

modules.exports = mongoose.model("order", orderSchema);

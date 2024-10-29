const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      // unique:true
    },
    discount_price: {
      type: String,
      required: false,
      // unique:true
    },
    desc: {
      type: String,
      required: true,
      min: 10,
      max: 100,
    },
    image: [],
    ContactNumber: {
      type: String,
      required: false,
      // unique:true
    },
    quantity: {
      type: Number,
    },
    variety: {
      color: {
        type: String,
      },
      size: {
        type: Number,
      },
      gender: {
        type: String,
      },
    },
    category: {
      type: String,
      required: true,
    },
    comment: {
      text: {
        type: String,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    rating: {
      stars: {
        type: Number,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },

    // suit:{
    //     type:string
    // },
    // city:{
    //     type:string
    // },
    // zipcode:{
    //     type:string
    // },
    // geo:{
    //     lat:{
    //         type:string
    //     },
    //     lng:{
    //         type:string
    //     }

    // },
    // },
    // phone:{
    //     type: Number
    // },
    // wbsite:{
    //     type: string,
    //     default: "https://geogle.com"
    // },
    // company:{
    //     name:{
    //         type: string,
    //     }
    // },
    // company:{
    //     name:{
    //         type: string,
    //     }
    // },
    // password:{
    //     type: string,
    //     required: true,
    //     min:6,
    //     max: 12,
    //     default: "1234"

    // },
    // carts: [],
    // profilepics: {
    //     type: string,
    // },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
module.exports = Product;

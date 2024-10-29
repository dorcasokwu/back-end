const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name:{
        type: String,
        required:true,
    },
    username:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    address:{
        street:{
            type:String
        },
        suit:{
            type:String
        },
        city:{
            type:String
        },
        zipcode:{
            type:String
        },
        geo:{
            lat:{
                type:String
            },
            lng:{ 
                type:String
            }
            
        },
    },
    phone:{
        type: Number
    },
    wbsite:{
        type: String,
        default: "https://geogle.com"
    },
    company:{
        name:{
            type: String,
        }
    },
    company:{
        name:{
            type: String,
        }
    },
    password:{
        type: String,
        required: true,
        min:6,
        max: 12,
        default: "1234"

    },
    carts: [],
    profilepics: {
        type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", UserSchema);

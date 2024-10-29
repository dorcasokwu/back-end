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
            type:string
        },
        suit:{
            type:string
        },
        city:{
            type:string
        },
        zipcode:{
            type:string
        },
        geo:{
            lat:{
                type:string
            },
            lng:{ 
                type:string
            }
            
        },
    },
    phone:{
        type: Number
    },
    wbsite:{
        type: string,
        default: "https://geogle.com"
    },
    company:{
        name:{
            type: string,
        }
    },
    company:{
        name:{
            type: string,
        }
    },
    password:{
        type: string,
        required: true,
        min:6,
        max: 12,
        default: "1234"

    },
    carts: [],
    profilepics: {
        type: string,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", ProductSchema);

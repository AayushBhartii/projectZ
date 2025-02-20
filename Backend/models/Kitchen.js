const mongoose = require('mongoose');
const kitcenSchema  = new mongoose.Schema({
    kitchenName:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:[
            {
                type:String,
                enum:['veg','non-veg']
            }
        ]
    },
    image:{
        type:String,
    },
    location:{
        type:String
    },
    ratings: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    kitchenOwner:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'KitchenOwner'
            }
        ],
})

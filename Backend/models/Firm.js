const mongoose = require('mongoose');
const firmSchema = new mongoose.Schema({
    firmName:{
        type:String,
        required:true,
        unique:true
    },
    area:{
        type:String,
        required:true
    },
    category:{
        type:[
            {
                type:String,
                enum:['veg','non-veg']
            }
        ]
    },
    cuisines:{
        type:[
            {
                type:String,
                enum:['south-indian',
                    'north-indian',
                    'chinese',
                    'indian',
                    'mexican',
                    'american-classics',
                    'italian',
                    'japanese',
                    'thai',
                    'korean',
                    'mediterranean',
                    'seafood',
                    'global-fusion']
            }
        ]
    },
    offer:{
        type:String
    },
    dietary:{
        type:[
            {
                type:String,
                enum:[
                    'vegan',
                    'halal',
                    'glutan-free',
                    'vegetarian',
                    'dairy-free',
                    'nut-free'
                ]
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
    popularity:{
        type:Number,
        min:0,
        max:10,
        default:0
    },
    video:{
        type:String
    },
    vendor:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Vendor'
        }
    ],
    product:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ]
})
const Firm = mongoose.model('Firm',firmSchema);
module.exports = Firm;



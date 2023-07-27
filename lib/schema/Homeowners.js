import {Schema,models,model} from "mongoose"


const instructionsSchema = new Schema({
  picture: { type: String, required: true },
  details: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, enum: ["Point"] },
},{timestamps:true})

const readingsSchema = new Schema({
  prePost: {type:String, required: true},
  picture: {type:String, required: true},
  numbers: {type:String, required: true},
  uploadedBy: {type:String, required:true},
  date: {type:Date, required:true}
})

const tarifSchema = new Schema({
  energyTarif: {type:Number, required: true },
  bufferAmount:{type:Number, required: true},
  total_Cost: {type: Number},
  energyUsed: {type:Number}
})

const housesSchema = new Schema({
  houseid: { type: String, required: true },
  houseName: { type: String, required: true },
  mpan: {type: String},
  mprn: {type:String},
  serial_number: {type: String},
  readings: [{ type: readingsSchema, default:{} }],
  address: { type: String, required: true },
  images: [{type:String}],
  houseOwner: { type: String, required: true },
  tarif: {type:tarifSchema, required: true},
  instructions: {type:instructionsSchema, default: {}},
})

const homeownersSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  house: {type: housesSchema },
  email:{
    type: String,
    required: true
  },
  password: {
    type:String,
    required: true
  },
  houseOwner: {
    type: Number,
    required: true,
  },
})

export default (models.homeowners) || model("homeowners",homeownersSchema)
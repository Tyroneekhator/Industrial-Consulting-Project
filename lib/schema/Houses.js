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
    readings: [{ type: readingsSchema, default:{} }],
    address: { type: String, required: true },
    images: [{type:String}],
    houseOwner: { type: String, required: true },
    tarif: {type:tarifSchema, required: true},
    instructions: {type:instructionsSchema, default: {}},
})

export default (models.houses) || model("houses",housesSchema)
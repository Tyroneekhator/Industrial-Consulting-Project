import {Schema,models,model} from "mongoose"

const agencySchema = new Schema({
  agencyName: {
    type: String,
  },
  fullName: {
    type: String,
    required: true,
  },
  role: {
    type:String
  },
  email:{
    type: String,
    required: true
  },
  password: {
    type:String,
    required: true
  },
})

export default (models.agencies) || model("agencies",agencySchema)
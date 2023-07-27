import {Schema,models,model} from "mongoose"

const usersSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type:String,
    required: true,
  },
  password: {
    type:String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  delegated: {
    type: String,
  },
})

export default (models.users) || model("users",usersSchema)
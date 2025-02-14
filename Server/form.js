const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber:{
    type: String,
    required: true,
  },
  message:{
    type: String,
  }
})


const Form = mongoose.model('Form', formSchema)
module.exports = Form
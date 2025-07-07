import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
    },
    lastName:{
        type: String,
        trim: true,
    },
    email:{
        type: String,
        trim: true,
        required: true,
    },
    username:{
         type: String,
        trim: true,
        required: true,
    },
    password:{
        type: String,
        trim: true,
        required: true,
    },
    isVerified:{
        type: Boolean
    }
})

const userModel = mongoose.model("users", userSchema)
export default userModel;
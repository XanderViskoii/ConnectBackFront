import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        // username: String,
        // email: String,
        // isActive: Boolean
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        }   
    },
    {timestamps: true}
);
export const User = mongoose.model("User", userSchema)


// users : Model Converts into plural and in small letter


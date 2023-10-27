import mongoose, { Mongoose } from "mongoose"

const productSchema = new mongoose.Schema(
    {
        description: {
            required: true,
            type: String
        },
        name: {
            required: true,
            type: String
        },
        productImage: {
            type: String,    // public url : Image uploaded in bucket on AWS/Cloudnery and their SDK in response they give public url  

        },
        price: {
            type: Number,
            default: 0
        },
        Stock: {
            type: Number,
            default: 0
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        Owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {timestamps: true}
);

export const Product =  mongoose.model("Product", productSchema)
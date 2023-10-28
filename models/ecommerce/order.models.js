import mongoose, { Mongoose } from "mongoose"

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema(
    {
       orderPrice: {
        type: Number,
        required: true,
       },
       customer: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
       },
       OrderItems: {
        type: [orderItemSchema]
       },address: {
        type: String,
        required: true
       },
       status: {
        type: String,
        enum: ["PENDING", CANCELLED, DELIVERED], //To make a restricted field i.e. we can only choose among these 3 only
        efault: "PENDING"
       }
    },
    {timestamps: true}
);

export const Order =  mongoose.model("Order", orderSchema)
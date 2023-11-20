import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  img: String,
  title: String,
  isAvailable: Boolean,
  remaining: String,
  rate: Number,
  price: Number,
  discountPrecent: Number,
  quantity: Number
});

export default mongoose.model('Product', productSchema)
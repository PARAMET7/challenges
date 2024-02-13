import mongoose from "mongoose";
import Review from "./Reviews";

const { Schema } = mongoose;

const Products = new Schema({
  name: { type: String },
  description: {type: String},
  price : {type: Number},
  currency: {type:String },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});



// Create the Product model based on the schema
const Product = mongoose.models.Product || mongoose.model("Product", Products);

export default Product;

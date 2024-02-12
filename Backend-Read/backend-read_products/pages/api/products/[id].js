// import { products } from "../../../lib/products";
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";


export default async function handler(request, response) {
  console.log(request);
  await dbConnect();
  // const products = await Product.findById(id).populate("reviews");

  // console.log("products=>",products);
  if (request.method === "GET") {
    const product = await Product.findById(request.query.id).populate("reviews");
    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(product);




  }

  response.status(200).json(product);
}

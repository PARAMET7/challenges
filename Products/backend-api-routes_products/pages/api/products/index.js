import { getAllProducts } from "@/services/productServices";

const all = getAllProducts();
export default function handler(req, res) {
  res.status(200).json(all);
}
console.log(getAllProducts);

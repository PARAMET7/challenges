import { getProductById} from "@/services/productServices";

export default function handler(request, res) {
  const id = request.query.id;

  console.log("request=>", request);
  console.log("the product should be : ");

  const item = getProductById(id);
  res.status(200).json(item);
}

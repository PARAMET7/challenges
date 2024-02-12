import { useRouter } from "next/router"; // import the useRouter hook to access the id query parameter from router.query
import useSWR from "swr";

export default function Details() {
  const router = useRouter();
  const id = router.query;
  console.log("id=>",id);//???????

  const url = `/api/products/${id}`;
  console.log("url=>", url);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) {
    return null;
  }
  console.log("data=>", data);
  return (
    <ul>
      <li>
        Name:{data.name}
        <br></br>Category:{data.category}
        <br></br>Price:{data.price}
        {data.currency}
        <br></br>About:{data.description}
      </li>
    </ul>
  );
}

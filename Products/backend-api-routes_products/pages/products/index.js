import useSWR from "swr";
import React from "react";

export default function ProductsList() {
  const {data, error, isLoading} = useSWR(`/api/products/`);

  if (error) <div>{error.message}</div>
  if (isLoading) <div>loading...</div>;
  if (data) {
    console.log("data=>", data);

  }
  if (!data) return null;
  return (
    <>
      <ul>
        {data.map((e) => (
          <li key={e.id}>
            Name:{e.name}
            <br></br>Category:{e.category}
            <br></br>Price:{e.price}
            {e.currency}
            <br></br>About:{e.description}
          </li>
        ))}
      </ul>
    </>
  );
}

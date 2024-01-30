import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";


export default function Character() {
  // const id = 1;
  const router = useRouter();
  const id = router.query.id;
  console.log("router=>",router);

  const url = `https://swapi.dev/api/people/${id}`;

  const fetcher = async (url) => {
  const response = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  // if (!response.ok) {
  //   const error = new Error("Can't fetching the data!!!");
  //   // Attach extra info to the error object.

  //   throw new Error(`Can't fatching data! ${response.statusText}`);
  // }
  // const data = await response.json();

  //   return data
  // };
  };

  if (!data && !error) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }


  if (error) {
    return (
      <Layout>
        <p>Error: {error.message}</p>
      </Layout>
    );
  }



  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
};

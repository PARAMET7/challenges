import useSWR from "swr";
const url = "/api/random-character";
const fetcher = (...args) => fetch(...args).then((res) => res.json()); // create fetcher and fetch the api url

export default function HomePage() {

  const { data, isLoading, error } = useSWR(url, fetcher); // destructured the API object with useSWR
  if (isLoading) {
    return <h1>Loading Product...</h1>;
  }

  if (error) {
    return;
  }

  // Display the random information:
  // data.id = product's id
  // data.name = product's name
  return (
    <>
      <h1>First name: {data.firstName}</h1>
      <h1>Last name: {data.lastName}</h1>
      <h2>Twitter: {data.twitterHandle}</h2>
      <h2>Geohasch: {data.geoHash}</h2>
    </>
  );
}

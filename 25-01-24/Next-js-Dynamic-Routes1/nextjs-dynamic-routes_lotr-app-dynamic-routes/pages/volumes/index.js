import { introduction } from "../../lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import Head from "next/head";

export default function Volumes() {
  const router = useRouter();
  function randomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  const r_v = randomElement(volumes);
  console.log("randomVolume: ", r_v);
  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
      </Head>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((v) => {
          return (
            <li key={v.slug}>
              <Link href={`/volumes/${v.slug}`}>{v.title}</Link>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          router.push(`/volumes/${r_v.slug}`);
        }}
      >
        Navigate to random volume here!
      </button>

    </>
  );
}

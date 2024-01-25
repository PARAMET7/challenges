import Link from "next/link";
import Head from "next/head";
import { introduction, volumes } from "../../resources/lib/data";

function  Volumes() {
  return (
    <>
     <Head>
        <title>Lord of the Rings</title>
     </Head>
     <h2>Lord of the Rings</h2>
     <br />
     <p>{introduction}</p>
     <br />
    <h3>All Volumes</h3>
    <ul>
      {volumes.map((v) =>{
        return(
          <li key={v.slug}>
              <Link href={`/volumes/${v.slug}`}>{v.title}</Link>
          </li>
        );

      })}
    </ul>
    </>
  );
}

export default Volumes;

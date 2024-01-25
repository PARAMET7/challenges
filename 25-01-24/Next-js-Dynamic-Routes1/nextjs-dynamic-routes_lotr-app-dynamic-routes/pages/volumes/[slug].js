import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function volumesSeris() {
  console.log("volumes=> ", volumes);

  const router = useRouter();
  const { slug } = router.query;

  const v_d = volumes.find(({ slug }) => slug === router.query.slug);
  console.log("v_d: ", v_d);

  const index = volumes.findIndex(
    (e) => e.slug === router.query.slug
  );
  console.log("index: ", index);

  const prevVolume = index > 0 ? volumes[index - 1] : null;
  const nextVolume =
    index < volumes.length - 1 ? volumes[index + 1] : null;

  if (!v_d) {
    return (
      <>
        <h1>That book has been missing ☹️ </h1>;
        <Link href="/volumes">← Back to all volumes</Link>
      </>
    );

}
  return (
    <>
      <Head>
        <title>{v_d.title}</title>
      </Head>
      <Link href="../volumes">All Volumes</Link>
      <h1>{v_d.title}</h1>
      <p>{v_d.description}</p>

      {v_d.books.map((b) => (
        <ul key={b.ordinal}>
          <li>{b.ordinal}</li>
          <li>{b.title}</li>
        </ul>
      ))}
      <Image src={v_d.cover} width={140} height={230} alt="" />

      {prevVolume && (
        <Link href={`/volumes/${prevVolume.slug}`}>
          <button>Previous book</button>
        </Link>
      )}
      {nextVolume && (
        <Link href={`/volumes/${nextVolume.slug}`}>
          <button>Next Book</button>
        </Link>
      )}

    </>

  );

}

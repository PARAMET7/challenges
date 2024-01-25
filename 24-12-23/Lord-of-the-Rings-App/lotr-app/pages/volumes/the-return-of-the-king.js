import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../resources/lib/data.js";

function TheReturnOfTheKing() {
  const theReturnOfTheKing = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  return (
    <>
      <Link href="/volumes">
        <h3>🔙 Home</h3>
      </Link>
      <section>
        <Link href="/volumes/the-two-towers">
          <h4>⏪️ Previous book 📖</h4>
        </Link>
      </section>
      <h1>{theReturnOfTheKing.title}</h1>
      <p>{theReturnOfTheKing.description}</p>
      <ul>
        {theReturnOfTheKing.books.map((b, i) => {
          return (
            <li key={i}>
              <h3>{b.ordinal}:</h3>
              <h4>{b.title}</h4>
            </li>
          );
        })}
      </ul>
      <Image
        src={`${theReturnOfTheKing.cover}`}
        width={140}
        height={230}
        alt={theReturnOfTheKing.title}
      />
    </>

  );
}

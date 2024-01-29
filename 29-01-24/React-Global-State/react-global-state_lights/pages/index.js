import Link from "../components/Link";

export default function HomePage({ lightCount }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{lightCount} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}

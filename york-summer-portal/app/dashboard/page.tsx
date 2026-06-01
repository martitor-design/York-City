import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="section">
      <p className="kicker">Preview route</p>
      <h1>York Summer Guide dashboard</h1>
      <p className="lede">
        The summer guide is published on the homepage with programs, events,
        parks, trails, and resident resources for York City, Pennsylvania.
      </p>
      <Link className="button primary" href="/">
        Open the guide
      </Link>
    </main>
  );
}
import "./page.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="main">
      <div className="container">
        <div className="title">more of me has disappeared and i cannot breathe</div>
       <div className="entries">
       <Link href="/jan30" legacyBehavior>
        <div className="entry">1.30.2025</div>
      </Link>
      <Link href="/feb28" legacyBehavior>
        <div className="entry">2.28.2025</div>
      </Link>
       </div>
      </div>
    </div>
  );
}

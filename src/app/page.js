import "./page.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="main">
      <div className="container">
        <div className="title">visions vanish</div>
       <div className="entries">
       <Link href="/CONDITION" legacyBehavior>
        <div className="entry">CONDITION</div>
      </Link>
      <Link href="/feb28" legacyBehavior>
        <div className="entry">MOMENTUM</div>
      </Link>
      <Link href="/feb28" legacyBehavior>
        <div className="entry">TRIUMPH</div>
      </Link> 
      <Link href="/feb28" legacyBehavior>
        <div className="entry">FREEDOM</div>
      </Link>
      <Link href="/feb28" legacyBehavior>
        <div className="entry">RHYTHM</div>
      </Link>
      <Link href="/feb28" legacyBehavior>
        <div className="entry">NOVELTY</div>
      </Link>
        <Link href="/feb28" legacyBehavior>
        <div className="entry">INDULGENCE</div>
      </Link>
       </div>
      </div>
    </div>
  );
}

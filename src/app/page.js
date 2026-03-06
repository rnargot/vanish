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
       </div>
      </div>
    </div>
  );
}

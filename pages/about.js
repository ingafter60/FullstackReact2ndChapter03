import Link from 'next/link';

export default () => (
  <div>
    <Link href="/">
      <a>Go to home</a>
    </Link>
    <h1>About</h1>

    <p>A JavaScript programmer</p>
    <img src="/static/javascript-log.png" alt="JavaScript" height="100px" />
  </div>
);

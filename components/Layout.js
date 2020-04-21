import Link from 'next/link';

const Layout = ({ children, title }) => (
  <div className="root">
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/hireme">
        <a>Hire Me</a>
      </Link>
    </header>

    <h1>{title}</h1>
    {children}

    <footer>
      <p>
        &copy; <span>ING&Anjel | </span>
        {new Date().getFullYear()}
      </p>
    </footer>
    <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em;
        font-size: 1.2rem;
        background: indigo;
      }
      header a {
        color: darkgrey;
        text-decoration: none;
      }
      header a:hover {
        font-weight: bold;
        color: lightgrey;
      }

      footer {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 0.1em;
        font-size: 1.2rem;
        background: indigo;
      }
      footer p {
        color: darkgrey;
        text-decoration: none;
      }
      footer a:hover {
        font-weight: bold;
        color: lightgrey;
      }
    `}</style>
    <style global jsx>{`
      body {
        margin: 0;
        font-size: 110%;
        background: #f0f0f0;
      }
    `}</style>
  </div>
);

export default Layout;

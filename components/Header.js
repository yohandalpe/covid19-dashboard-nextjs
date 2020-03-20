import Link from "next/link";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      COVID-19 Dashboard
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/sri-lanka">
            <a className="nav-link">Sri Lanka</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/japan">
            <a className="nav-link">Japan</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;

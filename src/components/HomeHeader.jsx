import { Link, NavLink } from "react-router-dom";

const HomeHeader = () => {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Register", path: "/register" },
    { title: "Dashboard", path: "/dashboard" },
  ];

  return (
    <>
      <nav className="navbar fw-bold shadow navbar-expand-lg sticky-top px-md-5 bg-body-tertiary">
        <div className="container-fluid">
          <div>
          <img
            src="https://img.freepik.com/premium-vector/modern-unique-hexagon-letter-bw-logo-design-template-elegant-initial-bw-letter-logo-concept_1101554-432.jpg?w=740"
            className="logo-height"
            alt=""
          />
          <Link className="navbar-brand fs-5" to="/">
            Ballot|<span className="text-black-50">Wave</span>
          </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navItems.map((link, idx) => (
                <li key={idx} className="nav-item  ms-2">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "navlink text-decoration-none text-black" : "navlink text-decoration-none text-secondary"
                    }
                    to={link.path}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default HomeHeader;


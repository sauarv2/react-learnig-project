import React from "react";
import PropTypes from "prop-types";
export default function Nav(props) {
  return (
    <div>
      <nav
        classNameName={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
      >
        <div classNameName="container-fluid">
          <a classNameName="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            classNameName="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <div classNameName="collapse navbar-collapse" id="navbarNavDropdown">
            <ul classNameName="navbar-nav">
              <li classNameName="nav-item">
                <a classNameName="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="#">
                  {props.feature}
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li classNameName="nav-item dropdown">
                <a
                  classNameName="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul classNameName="dropdown-menu">
                  <li>
                    <a classNameName="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a classNameName="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a classNameName="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-check form-switch">
          <input
            classNameName="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label
            classNameName={`form-check-label text-${props.ch}`}
            htmlFor="flexSwitchCheckDefault"
          >
            Dark Mode
          </label>
        </div>
      </nav>
    </div>
  );
}
// prop type--------
Nav.propTypes = {
  title: PropTypes.string,
  feature: PropTypes.string,
};
// default prop

Nav.defaultProps = {
  title: "set-title",
  feature: "set-features",
  // arrayProp: ['Ram', 'Shyam', 'Raghav'],
  // stringProp: "GeeksforGeeks",
  // numberProp: "10",
  // boolProp: true,
};

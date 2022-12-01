import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PageNavBar = (props) => {
  const [navDivs, setNavDivs] = useState(true);

  useEffect(() => {
    const pageList = ["home", "dashboard", "recommendation", "funding", "vc"];
    let navbarDivs = pageList.map((page, i) => {
      if (props.active === page) {
        return (
          <a className="nav-item nav-link active" key={i} href={"/" + page}>
            {page.charAt(0).toUpperCase() + page.substring(1, page.length)}
          </a>
        );
      } else {
        return (
          <a className="nav-item nav-link" key={i} href={"/" + page}>
            {page.charAt(0).toUpperCase() + page.substring(1, page.length)}
          </a>
        );
      }
    });
    setNavDivs(navbarDivs);
  }, [props.active]);

  return (
    <div className="PageNavbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">{navDivs}</div>
        </div>
      </nav>
    </div>
  );
};
export default PageNavBar;
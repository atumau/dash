import React from "react";
import { BsJustify } from "react-icons/bs";
function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <h4 className="hello">
          hello Atul <span className="wave">👋,</span>
        </h4>
      </div>
      <div className="header-right">
        <form className="d-flex sid">
          <input
            className="form-control me-2"
            type="search"
            placeholder="🔍 Search"
            aria-label="Search"
          />
        </form>
      </div>
    </header>
  );
}

export default Header;

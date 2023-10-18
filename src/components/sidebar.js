import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { GoPasskeyFill } from "react-icons/go";
import { MdProductionQuantityLimits } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { LuBadgePercent } from "react-icons/lu";
import { MdOutlineLiveHelp } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <MdDashboard className="icon_header" /> Dashboard
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <GoPasskeyFill className="icon" /> Dashboard
            <span className="arrow">
              <IoMdArrowDropright />
            </span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <MdProductionQuantityLimits className="icon" /> Product{" "}
            <span className="arrow">
              <IoMdArrowDropright />
            </span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Customers{" "}
            <span className="arrow">
              <IoMdArrowDropright />
            </span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <GiTakeMyMoney className="icon" /> Income{" "}
            <span className="arrow">
              <IoMdArrowDropright />
            </span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <LuBadgePercent className="icon" /> Promote{" "}
            <span className="arrow">
              <IoMdArrowDropright />
            </span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <MdOutlineLiveHelp className="icon" /> Help{" "}
            <span className="arrow">
              <IoMdArrowDropright />
            </span>
          </a>
        </li>
      </ul>
      <div className="button-name">
        <button type="button" className="butto btn btn-primary btn-lg">
          <img src="picn.jpeg" className="pic-pro" alt="profile" />
          <span className="butto-name">Atul</span> <br />
          <span className="butto-text">Project Manager</span>
          <span className="arrow2">
            <IoMdArrowDropdown />
          </span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;

import React from "react";
import "boxicons";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-content">
        <div className="logo">
          <i class="bx bx-code-curly"></i>
          <h3>NicoN</h3>
        </div>
      </div>
      <ul className="list">
        <li className="list-item">
          <a href="#projects">
            <i class="bx bxs-info-circle"></i>
            <span className="links-name">About Me</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#projects">
            <i class="bx bx-sidebar"></i>
            <span className="links-name">Projects</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#projects">
            <i class="bx bxs-contact"></i>
            <span className="links-name">Contact</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#projects">
            <i class="bx bxl-linkedin-square"></i>
            <span className="links-name">LinkedIn</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#projects">
            <i class="bx bxl-github"></i>
            <span className="links-name">Git</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

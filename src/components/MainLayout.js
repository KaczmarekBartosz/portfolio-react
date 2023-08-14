import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { Projects } from "./Projects";

function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <Content />
      <Projects />
    </div>
  );
}

export default MainLayout;

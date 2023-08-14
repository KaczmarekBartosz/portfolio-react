import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { Projects } from "./Projects";
import { Timeline } from "./Timeline";

function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <Content />
      <Projects />
      <Timeline />
    </div>
  );
}

export default MainLayout;

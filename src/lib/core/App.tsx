import { Route, Routes } from "@solidjs/router";
import { Component, createEffect, createSignal } from "solid-js";
import BlogPage from "../features/blog/BlogPage";
import HomePage from "../features/BlogPage";
import AboutPage from "../features/home/AboutPage";
import MusicPage from "../features/music/MusicPage";
import ProjectsPage from "../features/projects/components/pages/ProjectsPage";
import NavigationOrganism from "./shared/organisms/NavigationOrganism";

const App: Component = () => {
  return (
    <div>
      <NavigationOrganism />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/music" element={<MusicPage />} />
      </Routes>
    </div>
  );
};

export default App;

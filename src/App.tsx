import { Route, Routes } from "solid-app-router";
import { Component, createEffect, createSignal } from "solid-js";
import HomePage from "./components/pages/HomePage";

const App: Component = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;

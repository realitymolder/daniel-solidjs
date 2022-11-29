import { Component } from "solid-js";
import { NavLink } from "@solidjs/router";

const LogoAtom: Component = () => {
  return (
    <NavLink href={"/"}>
      <div>
        <h3 class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text font-mono text-2xl font-bold text-transparent">
          Daniel Toubul
        </h3>
        <h4 class="font-mono text-secondary">code & music</h4>
      </div>
    </NavLink>
  );
};

export default LogoAtom;

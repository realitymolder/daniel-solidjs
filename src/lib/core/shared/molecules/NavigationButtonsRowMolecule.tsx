import { Component } from "solid-js";
import NavigationButton from "../atoms/NavigationButtonAtom";

const NavigationButtonsRowMolecule: Component = () => {
  return (
    <div>
      <NavigationButton linkName="Blog" href="/" />
      <NavigationButton linkName="Projects" href="/projects" />
      <NavigationButton linkName="Music" href="/music" />
      <NavigationButton linkName="About" href="/about" />
    </div>
  );
};

export default NavigationButtonsRowMolecule;

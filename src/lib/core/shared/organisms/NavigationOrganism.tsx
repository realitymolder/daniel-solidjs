import { Component } from "solid-js";
import ContainerAtom from "../atoms/ContainerAtom";
import LogoAtom from "../atoms/LogoAtom";
import NavigationButtonsRowMolecule from "../molecules/NavigationButtonsRowMolecule";

const NavigationOrganism: Component = () => {
  return (
    <div class="bg-black">
      <nav class="mx-auto flex w-full min-w-[100%] items-center justify-around py-4">
        <LogoAtom />
        <NavigationButtonsRowMolecule />
      </nav>
    </div>
  );
};

export default NavigationOrganism;

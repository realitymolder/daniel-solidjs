import { Component, For } from "solid-js";
import ContainerAtom from "../atoms/ContainerAtom";
import H1Atom from "../atoms/H1Atom";

const HomePage: Component = () => {
  return (
    <ContainerAtom>
      <br />
      <br />
      <br />
      <H1Atom text="Daniel Toubul" />
      <p class="text-lg">
        <span class="font-bold text-red-500">NOTE:</span> This site is a work in
        progress.
        <br /> <span class="font-bold text-red-500">NOTE:</span> Due to effects
        of the COVID-19-pandemic the site is still in development.
        <br />
        <br />
        <span class="text-blue-400">
          You can reach me over{" "}
          <span class="font-bold">
            <a href="https://www.linkedin.com/in/danieltoubul/">Linkedin</a> |
            <a href="https://github.com/realitymolder"> Github</a>
          </span>
        </span>
      </p>
    </ContainerAtom>
  );
};

export default HomePage;

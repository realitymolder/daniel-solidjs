import { Component, For } from "solid-js";
import ContainerAtom from "../atoms/ContainerAtom";
import H1Atom from "../atoms/H1Atom";

const HomePage: Component = () => {
  return (
    <ContainerAtom>
      <H1Atom text="Daniel Toubul" />
      <p>
        Security researcher working on mobile privacy/security. Founder and lead
        developer of GrapheneOS. If you have a good reason to contact me, you
        can reach me at @strcat:grapheneos.org on Matrix. I prefer being
        contacted over Matrix, but you can contact me via email at
        daniel.micay@grapheneos.org. I'm phasing out my usage of obsolete
        PGP-based technology so you'll need to contact me via Matrix if you want
        to use end-to-end encryption.
        <br />
        <br />
        Links: GitHub Linkdin
      </p>
    </ContainerAtom>
  );
};

export default HomePage;

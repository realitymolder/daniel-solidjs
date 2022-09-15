import { JSXElement } from "solid-js";

interface H1Props {
  text: string;
}

const H1Atom = ({ text }: H1Props) => {
  return <h1 class="mb-8 text-4xl">{text}</h1>;
};

export default H1Atom;

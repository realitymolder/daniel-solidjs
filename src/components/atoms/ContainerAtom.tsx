import { JSXElement } from "solid-js";

interface ContainerProps {
  children: JSXElement;
}

const ContainerAtom = ({ children }: ContainerProps) => {
  return <div class="mx-auto mt-2 max-w-xl">{children}</div>;
};

export default ContainerAtom;

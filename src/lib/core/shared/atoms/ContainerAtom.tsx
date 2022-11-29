import { JSXElement } from "solid-js";

interface ContainerProps {
  children: JSXElement;
}

const ContainerAtom = ({ children }: ContainerProps) => {
  return <div class="mx-auto mt-2 w-[80%] py-6">{children}</div>;
};

export default ContainerAtom;

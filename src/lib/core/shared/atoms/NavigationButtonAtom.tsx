import { NavLink } from "@solidjs/router";
import { Component } from "solid-js";

interface NavigationButtonInterface {
  linkName: string;
  href: string;
}

const NavigationButton: Component<NavigationButtonInterface> = (props) => {
  return (
    <NavLink
      href={props.href}
      class="mx-10 font-mono font-semibold"
      end
      activeClass="text-secondary"
    >
      {props.linkName}
    </NavLink>
  );
};

export default NavigationButton;

import { Component } from "solid-js";
import ContainerAtom from "../../../../core/shared/atoms/ContainerAtom";
import ProjectItem from "../ProjectItem";

const ProjectsPage: Component = () => {
  return (
    <ContainerAtom>
      <div class="flex space-x-5">
        <ProjectItem
          projectName="BetBar"
          shortDescription="yes yes"
          imgSrc="/assets/img/bet-bar.png"
        />
        <ProjectItem
          projectName="BetBar"
          shortDescription="yes yes"
          imgSrc="/assets/img/bet-bar.png"
        />
        <ProjectItem
          projectName="BetBar"
          shortDescription="yes yes"
          imgSrc="/assets/img/bet-bar.png"
        />
      </div>
    </ContainerAtom>
  );
};

export default ProjectsPage;

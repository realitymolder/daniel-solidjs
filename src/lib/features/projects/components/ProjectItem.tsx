import { Component } from "solid-js";

interface ProjectItemProps {
  projectName: string;
  shortDescription: string;
  imgSrc: string;
}

const ProjectItem: Component<ProjectItemProps> = (props) => {
  return (
    <div class="hidden flex-col items-center space-y-6 rounded-lg bg-slate-400 p-6 md:flex md:w-1/3">
      <img src={props.imgSrc} class="-mt-14 w-16" alt="Bet Bar Logo" />
      <h5 class="text-lg font-bold text-black">{props.projectName}</h5>
      <p class="text-sm text-black">{props.shortDescription}</p>
    </div>
  );
};

export default ProjectItem;

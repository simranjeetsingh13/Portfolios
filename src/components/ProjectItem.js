import React from "react";

function ProjectItem({ image, name, id }) {

  const  projectClickedHandler = () =>{
    window.location.href ="https://github.com/simranjeetsingh13"
 }
  return (
    <div
      className="projectItem"
      onClick={projectClickedHandler}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Project.css';



function Project(props) {

 return (
  <div className="flex-box">
    <div class="flex-items"><h2>{props.projectName}</h2>
      <img src= {props.projectImage} width="250" height="250" />
      <a href={props.gitLink}><h4>{props.projectName} Github Link</h4></a>
      <a href={props.deployed}><h4>Go to {props.projectName}</h4></a>
      </div>
  </div >
    )
}

export default Project
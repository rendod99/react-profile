/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Project.css';




function Project(props) {

 return (
   <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <h1 class="display-4">{props.projectName}</h1>
      <p class="lead">Image.<img src={props.image}  /></p>
      <a href={props.gitLink} class="card-link"><h5>Git link</h5></a>
      <a href={props.deployed} class="card-link"><h5>Deployed link</h5></a>
      </div>
    </div>
  </div>
  )
}

export default Project



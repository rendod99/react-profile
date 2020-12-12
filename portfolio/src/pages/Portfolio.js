import React, { Component } from "react";
import Project from '../Components/Project'
import projects from './projects.json';
import image from './projects.json'
//import '../images';
//import './Contact.css'

class Portfolio extends Component {

      state= {
            projects,
            image
      }

render(){
  return (
      <div className="container flex-box flex-items">
      {this.state.projects.map(project => (
            <Project 
            projectName={project.projectName}
            image={project.image}
            gitLink={project.gitLink}
            deployed={project.deployed}/>


      ))}
      </div>
  );
};


}




export default Portfolio;
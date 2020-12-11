import React from 'react';
import Project from '../Components/Project'

//import './Contact.css'

export const Portfolio = () => {
  return (
    <div className="container flex-box flex-items">
      <Project 
      projectName={"Weather Dashboard"}
      gitLink={"https://github.com/rendod99/WeatherDashboard_hw_wk6"}
      deployed={"https://rendod99.github.io/WeatherDashboard_hw_wk6/"}/>

<Project 
      projectName={"Password Generator"}
      gitLink={"https://github.com/rendod99/PassGen_hw_wk3"}
      deployed={"https://rendod99.github.io/PassGen_hw_wk3/"}/>

<Project 
      projectName={"Samurai Swapmeet"}
      gitLink={"https://github.com/rendod99/Project_2"}
      deployed={"https://samuraiswapmeet.herokuapp.com/"}/>

<Project 
      projectName={"IDK, What Do You Want?"}
      gitLink={"https://github.com/rendod99/IDK_whatDoYouWant"}
      deployed={"https://rendod99.github.io/IDK_whatDoYouWant/"}/>

<Project 
      projectName={"Eat Da Burger"}
      gitLink={"https://github.com/rendod99/burger"}
      deployed={"https://arcane-inlet-71066.herokuapp.com/"}/>

<Project 
      projectName={"Team Builder"}
      gitLink={"https://github.com/rendod99/OOP_Template-Engine"}
      deployed={"https://rendod99.github.io/WeatherDashboard_hw_wk6/"}/>
        
       
  
    </div>
  )
};
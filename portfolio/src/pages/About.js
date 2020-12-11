import React from 'react';
import img from '../IMG_1371.jpg';
import './About.css'

export const About = () => {
  return (
   
<div className="container"> <h1>About Me</h1>
<img src={img} alt="Daniel" />;
   <div>
     I’m a FullStack web developer with a background in Retail Management. 
        I am Currently Enrolled in a FullStack Web Developer Coding Bootcamp at the University of San Antonio. 
        During my time in this course I have developed skills in Javascript,CSS and in Responsive web design. I have always been able to multitask and prioritize tasks to get the job at hand completed on time. 
        I have worked alone and with groups and have recently completed a group application that Utilizes Jquery and  API calls to find local nearby restaurants for consumers. 
        I’m excited to use the skills I have learned throughout my career and in this course.Apply them to make quality and efficient applications for a more user friendly experience on the web.
  </div>
      

        

        <div>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
        </div>

  
  </div>
  
  );
}


/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import pdf from '../Daniel_Resume.pdf';
//import './Contact.css'

export const Contact = () => {
  return (
    <main class="container">
        <form class="row">
            <section class="col-md-6">
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="John Doe" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput2">Email Address</label>
                <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@email.com" />
            </div>
            
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </section>
        </form>

        <br />

        <div class="list-group">
          <a class="list-group-item list-group-item-action list-group-item-primary">Phone: (210) 748-9486</a>
          <a class="list-group-item list-group-item-action list-group-item-primary">Email: rendod99@gmail.com</a>
          <a href="https://github.com/rendod99"><h4>Visit My GitHub!</h4></a>
          <a href="https://linkedin.com/in/daniel-rendon-7610551b7"><h4>Visit My Linkedin!</h4></a>
          <a href= {pdf} target = "_blank"><h4>Visit My Resume!</h4></a>
          
        </div>

        






      </main>
    
  )
};
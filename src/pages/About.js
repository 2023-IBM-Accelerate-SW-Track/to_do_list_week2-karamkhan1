import React, { Component } from 'react';
import "./About.css";
import pfp from "../assets/pfp.png";
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src = {pfp}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Karam Khan</div>
        <div className="brief_description">
        Hello! Welcome to my To-Do list web application! My name is Karam and I'm an 
        aspiring software developer who loves programming in Java. I enjoy running 
        and my favorite thing to tinker with is Google Calendar!
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}
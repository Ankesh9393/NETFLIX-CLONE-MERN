
import React from 'react'
import {Link} from 'react-router-dom'
import Ankesh from './Deveeloper/Ankesh.jpg'

import './Deveeloper/style.css'
const Developers = () => {
    return (
      <>
     
      <section class="main">
      <h1 className='headingB'>Developed By</h1>
       <div className="mainB">

     
      <div class="profile-card">
        <div class="image">
        <img src={Ankesh} alt="" class="profile-pic"/>
        </div>
        <div class="text">
        <h2>Ankesh Kumar</h2>
        <span>Web Designer</span>
        </div>
       
        <div class="social-icons">
  <div class="icon">
    <a id="a1" href="https://leetcode.com/u/ankesh9393/" target="_blank" rel="noopener noreferrer">
      <i class="fas fa-code"></i> 
    </a>
  </div>
  <div class="icon">
    <a id="a3" href="https://github.com/Ankesh9393" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-github"></i>
    </a>
  </div>
  <div class="icon">
    <a id="a2" href="https://www.linkedin.com/in/ankesh-kumar-4ab66a250/" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-linkedin"></i>
    </a>
  </div>
</div>

            </div>
            <div class="skills">
            <h6>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End Design</li>
              <li>CSS</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Mongoose</li>
              <li>Express</li>
            </ul>
            </div>
        </div>
     
      </section>
      
      </>
      );
}

export default Developers
import React from 'react';
import '../styles/landing.css';
import logoImg from '../images/logo.svg';
import {FiArrowRight} from 'react-icons/fi';
import { Link } from 'react-router-dom'

function Landing(){
    return (
    <div id="landing">
      <div className="content-wrapper">
        
        <img src={logoImg} alt=""/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanantos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Videira</strong>
          <span>Santa Catarina</span>

        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.7)"/>
        </Link>

      </div>
    </div>
    );
}

export default Landing;
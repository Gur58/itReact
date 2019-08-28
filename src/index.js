import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import bootstrapjs from 'bootstrap/dist/js/bootstrap';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./header/header";
import About from "./about/about";
import './about/about.css';
import './header/header.css';
import Services from './services/services';
import './services/services.css';
import './contact/contact.css';
import Contact from './contact/contact'

ReactDOM.render(
    <div className={`container-field`}>
        <Header></Header>
        <About></About>
        <Services></Services>
        <Contact/>
    </div>,
    document.getElementById('root')
)

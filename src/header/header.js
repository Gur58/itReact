import $ from 'jquery';
import React from 'react';


class Header extends React.Component{
    render() {
        return(
            <nav id='menu' className="navbar navbar-dark">
                <a className="navbar-brand" href="#about">OIT</a>
                <a className="navbar-brand" href="#services">Услуги</a>
                <a className="navbar-brand" href="#contact">Контакты</a>
            </nav>
        )
    }

    componentDidMount(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        });
    }
}



export default Header

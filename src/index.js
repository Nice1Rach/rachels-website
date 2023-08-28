import reportWebVitals from './reportWebVitals';
import App from './App';
import './main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
const $ = require('jquery');

// Initialize AOS
AOS.init();

$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
    });
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

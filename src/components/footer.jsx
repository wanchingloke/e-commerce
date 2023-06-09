import React from "react";
import { Link } from "react-router-dom";
import '../components/footer.css';

export const Footer = () => {
    return (
        <div className="footer">
            <Link to= "/"><p className="home">Home</p></Link>
            <Link to= "/cart"><p className="home">Cart</p></Link>
            <p className="contact-me">Contact Me here: +65 91234567   |   hookedonyarn@hotmail.com</p>
            <img src={require('../assets/instagram.png')}/>
            <img src={require('../assets/facebook.png')}/>
            <img src={require('../assets/youtube.png')}/>
        </div>
    )
}
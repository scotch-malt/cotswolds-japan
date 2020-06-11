import React from "react";

import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Twitter from "../images/twitter.svg";

import "../styles/footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-inside-left">
                <p className="pt-5 text-white">&copy; {new Date().getFullYear()} Cotswolds Japan</p>
                <div className="footer-inside-left-sms">
                    <a href="https://www.facebook.com/cotswoldsdistilleryjapan/" target="_blank" rel="noopener noreferrer"><img width={48} src={Facebook} alt="Facebook"/></a>
                    <a href="https://instagram.com/cotswoldsdistilleryjapan?igshid=79d8xs9l70ub" target="_blank" rel="noopener noreferrer"><img width={48} src={Instagram} alt="Instagram"/></a>
                </div>
            </div>
            <div className="footer-inside-right">
                
            </div>
        </div>
    );
}

export default Footer;
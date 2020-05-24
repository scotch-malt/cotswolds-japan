import React from "react";
import "../styles/footer.scss";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Twitter from "../images/twitter.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-inside-left">
                <p className="pt-5 text-white">&copy; {new Date().getFullYear()} Cotswolds Japan</p>
                <div className="footer-inside-left-sms">
                    <img width={48} src={Facebook} alt=""/>
                    <img width={48} src={Instagram} alt=""/>
                    <img width={48} src={Twitter} alt=""/>
                </div>
            </div>
            <div className="footer-inside-right">
                
            </div>
        </div>
    );
}

export default Footer;
import React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Twitter from "../images/twitter.svg";

import "../styles/contact.scss";

const Contact = () => {
    return (
        <Layout>
            <div className="contact">
                <div className="contact-main-content">
                    <h1>CONTACT US</h1>
                    <div className="contact-main-content-social">
                        <img src={Facebook} alt="Facebook" className="img-fluid" title="Facebook"/>
                        <img src={Instagram} alt="Instagram" className="img-fluid" title="Instagram"/>
                        <img src={Twitter} alt="Twitter" className="img-fluid" title="Twitter"/>
                    </div>
                    <form className="contact-main-content-form">
                        <h3 className="text-center py-4">General Inquiries</h3>
                        <div className="contact-main-content-form-group">
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                        </div>
                        
                    </form>
                </div>
                <Footer />
            </div>
        </Layout>
        
    );
}

export default Contact;
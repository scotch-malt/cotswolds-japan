import React from "react";
import "../styles/home.scss";
import Logo from "../images/logo.svg";

const Home = () => {
    return (
        <div className="home">
            <header className="primary-header">
                <div className="primary-header-container">
                    <div className="primary-header-container-logo">
                        <img className="responsive" src={Logo} alt=""/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;
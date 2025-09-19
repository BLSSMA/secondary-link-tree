import React from "react";
import "./WelcomePage.css";

const WelcomePage = () => {

    return (
        <div className="WelcomePage d-flex">
            <div className="WelcomeHeader">
                <h1 className="typed-out">✨WELCOME✨</h1>
            </div>
            <div className="EtsyButton">
                <a href="https://littlehaunteddesigns.etsy.com" className="PortfolioLink" title="https://littlehaunteddesigns.etsy.com" target="_blank" rel="noreferrer">ETSY</a>
            </div>
            <div className="InstagramButton">
                <a href="https://www.instagram.com/haunted_design/" className="PortfolioLink" title="https://www.instagram.com/haunted_design/" target="_blank" rel="noreferrer">INSTAGRAM</a>
            </div>
        </div>
    )
}

export default WelcomePage;
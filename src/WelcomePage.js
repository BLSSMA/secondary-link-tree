import React from "react";
import "./WelcomePage.css";
import lovers from "./imgs/lovers.jpeg";

const WelcomePage = () => {

    return (
        <div className="WelcomePage d-flex">
            <div className="WelcomeHeader">
                <h1 className="typed-out">Oh, Hi There 🫶</h1>
            </div>

            <div className="SpicyButton">
                <a href="https://onlyfans.com/baebeeangel" className="PortfolioLink" title="https://onlyfans.com/baebeeangel" target="_blank" rel="noreferrer">Spicy Site</a>
            </div>
            <div className="RedditButton">
                <a href="https://www.reddit.com/user/baebeeangel/" className="PortfolioLink" title="https://www.reddit.com/user/baebeeangel/" target="_blank" rel="noreferrer">Reddit</a>
            </div>
            <div className="InstagramButton">
                <a href="https://www.instagram.com/baebee.angel" className="PortfolioLink" title="https://www.instagram.com/baebee.angel" target="_blank" rel="noreferrer">Instagram</a>
            </div>
            <div className="lovers"><img src={lovers} alt="statue people kissing"></img></div>
        </div>
    )
}

export default WelcomePage;
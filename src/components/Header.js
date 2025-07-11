import React from "react";
import { Link } from "react-router-dom";
import bannerImg from '../images/restauranfood.jpg';

const Header = () => {
    return (
        <div>
            <header className="header">
                <section>
                    <div>
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>We are a family owned Mediterraneran restaurant, focused on tradiational recipes served with a modern twist.</p>
                        
                        <Link to="/booking"><button aria-label = 'On click'>Reserve table</button></Link>
                    </div>

                    <div className="banner-img">
                        <img src={bannerImg} alt = "hello"></img>
                    </div>
                </section>
            </header>
        </div>
    );
}

export default Header;
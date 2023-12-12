import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";

const Home = () => {

    return(
        <div className="containerHome">
            <Link to='/configGame'>
                <button className="btnJogar">
                    <p className="textJogar">jogar</p>
                </button>
            </Link>
        </div>
    );
}

export default Home



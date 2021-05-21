import React from 'react';
import './style.css';
import CapaFilme from '../../assets/capa-filme.jpg'

function Card() {
    return (
        <div className="container-around-cards">
            <div className="container-card">
                <h1>Filme 1</h1>
                <img src={CapaFilme} alt="" />
            </div>
        </div>
    )
}

export default Card;

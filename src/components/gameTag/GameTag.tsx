import React from 'react';
import './gameTag.css';

const GameTag = () => {

    return(
        <div className='item'>
            <span className='pais'>Pais 1</span>
            <div className='box-input'>
                 <input className='input-nome' placeholder='Nome do pais'/>
            </div> 
        </div>
    );
}

export default GameTag
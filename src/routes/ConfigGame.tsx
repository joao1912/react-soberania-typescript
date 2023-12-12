import React from "react";
import './styles/configGame.css';
import GameTag from "../components/gameTag/GameTag";

const ConfigGame = () => {

    return(
        <div className="containerConfig">
            <h1 className="title">Configurações</h1>
            <div className="box-form">

                <section className="form-containers">

                    <div className="box-botoes">

                        <h2 className="text-quant-jogadores">Quantos jogadores</h2>
                        <div className="botoes-config">
                            <button>
                                <p>2 Jogadores</p>
                            </button> 
                            <button>
                                <p>3 Jogadores</p>
                            </button>
                            <button>
                                <p>4 Jogadores</p>
                            </button>
                        </div>
                    </div>
                    <div className="box-botoes">
                        <h2>Cartas de Evento</h2>
                        <div>
                            <button>
                                <p>Sim</p>
                            </button> 
                            <button>
                                <p>Não</p>
                            </button>
                        </div>

                    </div>

                </section>
                <section className="form-containers paises">
                    <GameTag />
                    <GameTag />
                    <GameTag />
                    <GameTag />
                </section>
            </div>
        </div>
    );
}

export default ConfigGame
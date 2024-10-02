import React from "react";
import Counter from "../../components/Counter";
import useCountdown from "../../hooks/useCountdown";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Title from "../../components/Title";
import logo from "../../assets/logo.png"

export default function Countdown() {
    const [day, hour, minute, second] = useCountdown('Mar 01, 2025 00:00:00');

    return (
        <div className="App">
            <div className='container'>


                <div className='logo'>
                    <img src={logo} alt="" />
                </div>

                <div>
                    <Title title='Faltam apenas..' />
                </div>

                <div className='countdown-container'>
                    <Counter title='Dias' number={day} />
                    <Counter title='Horas' number={hour} />
                    <Counter title='Minutos' number={minute} />
                    <Counter title='Segundos' number={second} />
                </div>

                <div className='button1'>
                    <Link to="/register">
                        <Button children="GARANTA JÁ SUA VAGA!" />

                    </Link>
                </div>

                {/* <div className='action'>
          <a href='https://forms.gle/qbe9VkYMyZH6QiPs6'><button type='text'>garanta já a sua vaga</button></a>
          <p>clique no botão para fazer a inscrição!</p>
        </div> */}

                {/* <div className='over'>
          <span className='umapena'>
            AS INSCRIÇÕES JÁ SE ENCERRARAM, UMA PENA!
          </span>

          <span className='whats'>Mas se precisar falar com a gente, <a href='https://api.whatsapp.com/send?phone=5519989318887&text=Oi!%20Queria%20conversar%20sobre%20o%20Acampa.'>
            CLIQUE AQUI
          </a>
          </span>
        </div> */}

            </div>
        </div>
    );
}
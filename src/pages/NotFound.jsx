import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

    const navigate = useNavigate();

    return (
        <div className='main'>
            <div className='main-in'>
                <div className='main-in-title'>
                    <h1>π¨ν΄λΉ νμ΄μ§λ₯Ό μ°Ύμ§ λͺ»νμ΅λλ€!π¨</h1>
                </div>

                <div className='main-in-text'>
                    <h2>μ΄ νμ΄μ§λ μ£Όμκ° μλͺ»λμκ±°λ μ‘΄μ¬νμ§ μλ νμ΄μ§ μλλ€ </h2>
                    <br />
                    <p> μλ λ²νΌμ λλ¬ ν νμ΄μ§λ‘ λμκ°μ μμ΅λλ€</p>
                    <br />
                    <span>β¬οΈ</span>
                    <div>

                        <button className='button'
                            onClick={() => {
                                navigate('/')
                            }}>Home</button>

                    </div>

                </div>




            </div>
        </div >
    )
}

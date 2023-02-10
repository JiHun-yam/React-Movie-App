import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

    const navigate = useNavigate();

    return (
        <div className='main'>
            <div className='main-in'>
                <div className='main-in-title'>
                    <h1>🚨해당 페이지를 찾지 못했습니다!🚨</h1>
                </div>

                <div className='main-in-text'>
                    <h2>이 페이지는 주소가 잘못되었거나 존재하지 않는 페이지 입니다 </h2>
                    <br />
                    <p> 아래 버튼을 눌러 홈 페이지로 돌아갈수 있습니다</p>
                    <br />
                    <span>⬇️</span>
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

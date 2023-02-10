import React from 'react'
import './MovieDetail.css'
import { useLocation, useParams } from 'react-router-dom'
import { IMG_BASE_URL } from '../Movie/Movie'




export default function MovieDetail() {
    console.log()
    // 재목
    const { title } = useParams();
    // Props된것들
    const { state } = useLocation();
    console.log(title, state)
    return (
        <div className="page-container">
            <div className='page-wrap'>
                <img className='detail_img' src={IMG_BASE_URL + state.poster_path} alt='영화 포스터 이미지' />
                <div className='detail_text'>
                    <div className='detail-title'>
                        <h2> {title}</h2></div>
                    <div className='detail-overview'>
                        <p>{state.overview}</p>
                    </div>
                    <div className='detail-vote'>
                        <span>평점⭐️ : {state.vote_average}</span>
                    </div>
                </div>
            </div>
        </div >
    )
}
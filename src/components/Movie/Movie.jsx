import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Movie.css'





export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie(props) {
    console.log(props)
    // props = title, vote_average, poster_path 가 들어있는 객체 

    const navigate = useNavigate();


    const onClickMovieItem = () => {
        // 내가 영화포스트의 이미지값
        navigate(`/movies/${props.title}`, {
            state: props,
        });
    };



    return (
        <div className="movie-container" onClick={onClickMovieItem} >
            {/* IMG_BASE_URL 디폴터값 + 각각의 Img 값 추가 */}
            <img src={IMG_BASE_URL + props.poster_path} alt="영화포스터" />
            <div className="movie-info">
                <h4 className='title'> {props.title}</h4>
                <span>별점⭐️: {props.vote_average}</span>
            </div>
        </div>
    )
}

export default Movie
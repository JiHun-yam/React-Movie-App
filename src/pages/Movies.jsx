import React from 'react'
import { dummy } from '../movieDummy.js'
import Movie from '../components/Movie/Movie.jsx'

export default function Movies() {
    return (
        <div className='movies-container'>
            {
                // item = results 의 각각의 요소
                dummy.results.map((item) => {
                    return <Movie
                        key={item.id}
                        title={item.title}
                        poster_path={item.poster_path}
                        vote_average={item.vote_average}
                        overview={item.overview} />
                })
            }
        </div>
    )
}

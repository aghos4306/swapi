import React from 'react'
import { useGlobalContext } from '../context'
import { Link  } from 'react-router-dom'
import './Movies.css'

const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
    const { swapiContent, isLoading } = useGlobalContext()

    if(isLoading) {
        return (
            <div className="loading"></div>
        )
    }

    return (
        <section className="movies">
            {swapiContent.map((movie) => {
                const {name, starship_class, length, manufacturer} = movie
                return (
                    <Link to={`swapiContent/${url}`} key={length} className="movie">
                        <article className="story"> 
                            <h4 className="name">{name}</h4>
                            <p className="starship">
                                {starship_class} manufactured by {' '}
                                 <span>{manufacturer}</span>
                            </p>
                            <div>
                                <a href={length} className="read-link" target="_blank" rel="noopener noreferrer">
                                    read more
                                </a>
            
                            </div>
                        </article>
                    </Link>
                )
            })}
        </section>
    )
}

export default Movies
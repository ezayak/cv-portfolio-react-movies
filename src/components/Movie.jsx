import React from 'react';

function Movie(props) {
    const {imdbID, Title, Year, Type, Poster} = props;

    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    Poster === 'N/A' ?
                    <img className="activator" src={'https://via.placeholder.com/300x450?text='+Title} />
                                    :
                    <img className="activator" src={Poster} />                                    
                }
            </div>
            <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{Title}</span>
            <p>{Type} <span className="right">{Year}</span></p>
            </div>
        </div>
    );
}

export default Movie;
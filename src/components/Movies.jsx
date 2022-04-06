import Movie from './Movie';
import Preloader from './Preloader';

function Movies(props) {
    const {movies, loading} = props;
    const style = {
        'display': 'flex',
        'justifyContent': 'center',
        'minHeight': '200px',
        'alignItems': 'center'
    };

    return (
        loading   
        ? 
            <Preloader />
        :
            !movies 
            ?
                <div style={style}>No movies found</div>
            :
                <div className="movies">
                    {movies.map((movie, index) => (
                        <Movie key={movie.imdbID} {...movie} />
                    ))}
                </div>

    );
}

export default Movies;
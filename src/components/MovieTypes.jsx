import React from "react";

class MovieTypes extends React.Component {
    state = {
        movieType: 'all'
    }
    
    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
        this.props.onChangeType(value);
    }

    render() {
        const {movieType} = this.state;

        return (
            <div className="movie-types">
                <div>
                    <label>
                        <input className="with-gap" name="movieType" value="all" type="radio" checked={movieType==='all'} onChange={this.handleChange}/>
                        <span>All</span>
                    </label>               
                </div>
                <div>
                    <label>
                        <input className="with-gap" name="movieType" value="movie" type="radio" checked={movieType==='movie'} onChange={this.handleChange}/>
                        <span>Movies</span>
                    </label>               
                </div>
                <div>
                    <label>
                        <input className="with-gap" name="movieType" value="series" type="radio" checked={movieType==='series'} onChange={this.handleChange}/>
                        <span>Series</span>
                    </label>               
                </div>
            </div>
        );
    }
}

export default MovieTypes;
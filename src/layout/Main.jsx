import React from "react";
import Movies from "../components/Movies";
import MovieTypes from "../components/MovieTypes";
import Paginator from "../components/Paginator";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        search: '',
        page: 1,
        pagesNumber: 1,
        loading: true,
        type: 'all'
    };

    getSearchString = (search, type, page) => {
        let apiAddress = `http://www.omdbapi.com/?apikey=${API_KEY}`;

        if (search !== '') {
            apiAddress += '&s=' + search;
        } else {
            apiAddress += '&s=matrix';
        }

        if (type !== 'all') {
            apiAddress += '&type=' + type;
        }

        if (page !== 0) {
            apiAddress += '&page=' + page;
        }

        return apiAddress;
    }

    fetchMovies = (search, type, page) => {
        fetch(this.getSearchString(search, type, page))
            .then(response => (response.json()))
            .then(response => {
                 this.setState({
                    movies: response.Search,
                    loading: false,
                    pagesNumber: Math.ceil(Number(response.totalResults)/10) 
                });
            })
    }

    onChangeSearch = (search) => {
        this.setState({loading: true, search: search, page: 1});
        this.fetchMovies(search, this.state.type, 1);
    }

    onChangeType = (type) => {
        this.setState({loading: true, type: type, page: 1});
        this.fetchMovies(this.state.search, type, 1);
    }

    onChangePage = (page) => {
        this.setState({loading: true, page: page});
        this.fetchMovies(this.state.search, this.state.type, page);
    }

    componentDidMount = () => {
        this.fetchMovies('', 'all', 1);
    }

    render() {
        const {movies, loading, pagesNumber, page} = this.state;

        return (
            <main className="container content">
                <Search onChangeSearch={this.onChangeSearch}/>
                <MovieTypes onChangeType={this.onChangeType}/>
                <Movies loading={loading} movies={movies}/>
                <Paginator loading={loading} currentPage={page} pagesNumber={pagesNumber} onChangePage={this.onChangePage}/>
            </main>
        );    
    }

}

export default Main;
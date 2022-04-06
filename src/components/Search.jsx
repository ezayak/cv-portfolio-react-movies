import React from "react";

class Search extends React.Component {    
    state = {
        search : ''
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
             this.props.onChangeSearch(this.state.search);
        }
    }

    render() {
        return (
            <div className="input-field">
                <input 
                    id="search" 
                    type="search" 
                    className="validate" 
                    placeholder="Search" 
                    value={this.state.search}
                    onChange={(e) => (this.setState({search: e.target.value}))}
                    onKeyDown={this.handleKeyDown}
                />
                <a className="waves-effect waves-teal btn-flat btn-search" onClick={() => this.props.onChangeSearch(this.state.search)}>Search</a>
            </div>
        );
    }
}

export default Search;
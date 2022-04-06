import React from "react";

class Paginator extends React.Component {
constructor(props)
{
    super(props);
    let pages = [];

    if (!props.loading) {
        pages = this.createPageArray(props.pagesNumber);
    }

    this.state = {
        pages: pages,
        pagesNumber: props.pagesNumber,
        currentPage: props.currentPage,
        loading: props.loading
        }
}
    handleChangePage = (page) => {
        if (page === this.state.currentPage) {
            return;
        } else if (page === '+') {
            page = this.state.currentPage + 1;
        } else if (page === '-') {
            page = this.state.currentPage - 1;
        }

        this.props.onChangePage(page);
        this.setState({currentPage: page});
    }

    createPageArray(pagesNumber) {
        let pages = [];

        for (let i=1; i <= pagesNumber; i++) {
            pages.push({
                name: i,
                id: 'paginator' + i
            })
        }

        return pages;
    }

    render() {
        const {currentPage, loading, pagesNumber} = this.props;
        const pages = this.createPageArray(pagesNumber);
        const noPages = pages.length <= 0 || loading;

        return (
            <div className="movie-paginator">
                {
                    noPages
                    ?
                        <div key="paginator0"></div>
                    :
                    <ul className="pagination">
                        <li className={currentPage == 1 ? "disabled" : ""}><a href="#" onClick={() => (this.handleChangePage('-'))}><i className="material-icons">chevron_left</i></a></li>
                        {
                            pages.map((page) => {
                                return (<li className={page.name == currentPage ? "active" : "waves-effect"} key={page.id}><a href="#" onClick={() => (this.handleChangePage(page.name))}>{page.name}</a></li>)
                            })
                        }
                        <li className={currentPage === pagesNumber ? "disabled" : ""}><a href="#" onClick={() => (this.handleChangePage('+'))}><i className="material-icons">chevron_right</i></a></li>
                    </ul>                
                }
            </div>
        );
    }
}

export default Paginator;
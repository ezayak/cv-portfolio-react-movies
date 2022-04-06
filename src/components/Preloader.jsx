function Preloader() {
    const style = {
        'display': 'flex',
        'justifyContent': 'center',
        'minHeight': '200px',
        'alignItems': 'center'
    };

    return (
        <div style={style}>
            <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
                </div>
            </div>        
        </div>
    );
}

export default Preloader;
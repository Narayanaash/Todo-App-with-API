import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer font-small bg-primary">
            <div className="footer-copyright text-center py-2">Made with <span className="text-danger"><i className="fa fa-heart"></i></span> by : 
                <a className="text-dark" href="#!"> Narayan Aash</a> | <a rel="noopener noreferrer" href="https://github.com/narayanaash" target="_blank"><i className="fa fa-github"></i></a>
            </div>
            </footer>
        )
    }
}

export default Footer
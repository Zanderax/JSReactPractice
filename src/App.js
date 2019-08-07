import React from 'react';

import logo from './logo.svg';
import './App.css';


const imagePaths = {
    minus: "https://images.vexels.com/media/users/3/131484/isolated/preview/a432fa4062ed3d68771db7c1d65ee885-minus-inside-circle-icon-by-vexels.png",
    plus: "https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/plus-big-512.png"
}

class App extends React.Component{
    state = {
        open: true
    }
    toggleImage = () => {
        this.setState(state => ({open: !state.open}))
    }

    getImageName = () => this.state.open ? 'plus' : 'minus'

    render() {
        const imageName = this.getImageName();
        return(
            <div>
                <div className="App">
                    <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Don't tell me what to do!
                        <div>
                          <img style={{maxWidth:'50px'}} src={imagePaths[imageName]} onClick={this.toggleImage} />
                        </div>
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    </header>
                </div>
            </div>
        );
    }
}

export default App; 

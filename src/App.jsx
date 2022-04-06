import React, {Component} from 'react';
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
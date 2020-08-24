import React from 'react';
import Routes from './config/routes'
import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar';





import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App 

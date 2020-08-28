import React, {useState} from 'react';
import Routes from './config/routes'
import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar';





import './App.css';
import UserModel from './models/user';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function App(props) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'))

  const storeUser = userId => {
    setCurrentUser({currentUser: userId })
    localStorage.setItem('uid', userId)
  }

  const logout = event => {
    event.preventDefault()

    localStorage.removeItem('uid')
    UserModel.logout()
      .then(data => {
        console.log(data)
        setCurrentUser(null)
        props.history.push('/')
      })
  }

  return (
    <div className="App">
      <Container fluid id="body">
        <Row className="body">
          <Header 
            currentUser={ currentUser }
            logout={ logout }
          />
        </Row>

        <Row className="body">
          <NavBar />
        </Row>

        
        <Row className="body">
          <Routes 
          currentUser= { currentUser }
          storeUser= { storeUser }
          />
        </Row>
        
        <Row className="body">
          <Footer />
        </Row>

      </Container>
    </div>
  );
}

export default App 

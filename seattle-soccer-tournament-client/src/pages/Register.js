import React, { Component } from 'react';
import UserModel from '../models/user';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Register extends Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: '',
    password2: ''
  }


  handleSubmit = event => {
    event.preventDefault()

    // confirm password is the same
    if (this.state.password !== this.state.password2) return false;

    UserModel.create(this.state)
      .then(data => {
        console.log(data);
        // remember to clear state to also clear the form fields
        this.setState({
          name: '',
          email: '',
          username: '',
          password: '',
          password2: ''
        })
        // redirect to the login screen
        this.props.history.push('/login')
      })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="createForm">
        <h4>Register</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="name"
                placeholder="Please enter your full name"
                onChange={this.handleChange}
                value={this.state.name}
              />

            <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text"
                id="name"
                name="username"
                placeholder="Please choose a username"
                onChange={this.handleChange}
                value={this.state.username}
              />

            <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email"
                id="email"
                name="email"
                placeholder="Please enter your email"
                onChange={this.handleChange}
                value={this.state.email} 
              />

            <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password"
                id="password"
                name="password"
                placeholder="Please choose a password"
                onChange={this.handleChange}
                value={this.state.password}
              />

            <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
                type="password"
                id="password2"
                name="password2"
                placeholder="Please enter the same password that you choose"
                onChange={this.handleChange}
                value={this.state.password2}
              />

        <Button type="submit" value="Register">Register</Button>
        </Form.Group>


        </Form>
      </div>
    );
  }
}

export default Register;
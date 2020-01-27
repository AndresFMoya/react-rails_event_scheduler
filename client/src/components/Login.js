import React, { Component } from 'react';
import { Form, Button, Col, Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authenticate } from '../redux/actions/authActions';
import TextFieldGroup from '../components/common/formFields';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.authenticate(this.state)) {
      this.props.history.push('/')
      window.alert("You're Logged In!")
    } else {
      window.alert("Sorry, something went wrong. Please try logging in again.")
    }
  };
  
  render() {
    return (
      <main>
        <Form onSubmit={this.handleSubmit}>
          <h1 className="page-title">Login</h1>
          <TextFieldGroup
            label="username"
            id="formControlsUsername"
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="Password"
            id="formControlsPassword"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div className="submissionFields">
            {/*<Button bsStyle="link">Forgot Password?</Button>*/}
            <Button type="submit" value="Login">Log In</Button>
          </div>
          {/*<div className="alternativeAccess">*/}
          {/*  <p>New to SelfCare? <a href="/signup">Sign Up</a></p>*/}
          {/*</div>*/}
        </Form>
      </main>
    )
  }
}

export default Login = withRouter(connect(null, {authenticate})(Login));
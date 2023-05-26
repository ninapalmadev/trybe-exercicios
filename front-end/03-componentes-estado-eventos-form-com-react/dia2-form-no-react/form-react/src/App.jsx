import './App.css'
import Form from './Form';
import React from 'react';

class App extends React.Component {
  state = {
    userInfo: {
      name: '',
      email: '',
      age: '',
      obs: '',
    }
  }
  validateForm = () => {
    const { userInfo: name, email } = this.state;
    const emailRegex = /\S+@\S+\.\S+/;
    const emailValid = emailRegex.test(email);
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const nameValid = nameRegex.test(name);

    return emailValid && nameValid;
  }

  handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    const valueField = type === 'checkbox' ? checked : value;

    this.setState((prev) => ({
      userInfo: {
        ...prev.userInfo,
        [name]: valueField,
    },
    }))
  }

  render() {
    const { userInfo } = this.state;
    return (
      <>
        <h1>Formulário</h1>
        < Form 
        userInfo={ userInfo }
        handleChange={ this.handleChange }
        validateForm={ this.validateForm }
        />
      </>
    )
  }
}
export default App;

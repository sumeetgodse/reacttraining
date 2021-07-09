import React from 'react';
import ReactDOM from 'react-dom';

import Name from './components/Name';
import Email from './components/Email';
import DateOfBirth from './components/DateOfBirth';
import Gender from './components/Gender';
import ProfilePic from './components/ProfilePic';
import Education from './components/Education';
import Password from './components/Password';
import ConfirmPassword from './components/ConfirmPassword';
import Table from './components/Table';

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      profilePicUrl: "",
      education: "",
      password: "",
      confirmPassword: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({ 
      [event.target.name]: event.target.value 
    });
  }

  clearFormErrors () {
    const formElements = ["nameError", "emailError", "dobError", "genderError", "profilePicError", "educationError", "pwdError", "confirmPwdError"];

    formElements.forEach((element) => {
      document.getElementById(element).innerHTML = "";
    })
  }

  clearState () {
    this.setState({ 
      name: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      profilePicUrl: "",
      education: "",
      password: "",
      confirmPassword: "",
      submitted: ""
    });
  }

  validateDate () {
    const varDate = new Date(this.state.dateOfBirth);
    const today = new Date();
    if( varDate > today ) {
      return false;
    }
    return true;
  }

  // Form Validation
  handleSubmit (event) {
    // Prevent browser refresh as it usually happens after form submit
    event.preventDefault();

    // Clear previous errors for invalid input
    this.clearFormErrors();

    let flag = true;

    const nameRegexp = /^[a-zA-z]+([\s][a-zA-Z]+)*$/g;
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
    const passwordRegexp = /^(?!^[.])(?!.*[.]$)(?!.*[.]{2})[\w!'`&=~%#/$*+\-^?{}|.]{1,64}$/g;
    const dateRegexp = /^([0-9]{1,2})-([0-9]{1,2})-([0-9]{2,4})$/g;
    const imgFormat = /(\.jpg|\.jpeg|\.png)$/i;

    // Name validation, accepted format - words with spaces
    if( this.state.name === "" || !nameRegexp.test(this.state.name) ) {
      flag = false;
      document.getElementById('nameError').innerHTML = "Invalid name, please re-enter";
    }

    // Email validation
    if( this.state.email === "" || !emailRegexp.test(this.state.email) ) {
      flag = false;
      document.getElementById('emailError').innerHTML = "Invalid email, please re-enter";
    }

    // Password Validation
    if( this.state.password === "" || !passwordRegexp.test(this.state.password) ) {
      flag = false;
      document.getElementById('pwdError').innerHTML = "Invalid password, please re-enter";
    }

    // Confirm password should match original password
    if( this.state.password !== this.state.confirmPassword ) {
      flag = false;
      document.getElementById('confirmPwdError').innerHTML = "Passwords do not match, please re-enter";
    }

    // Gender must be selected
    if( this.state.gender === "" ) {
      flag = false;
      document.getElementById('genderError').innerHTML = "Please select gender";
    }

    // Education must be selected
    if( this.state.education === "" ) {
      flag = false;
      document.getElementById('educationError').innerHTML = "Please select education";
    }

    // DD/MM/YYYY format and should not go past current date
    if( this.state.dateOfBirth === "" || !dateRegexp.test(this.state.dateOfBirth) || !this.validateDate() ) {
      flag = false;
      document.getElementById('dobError').innerHTML = "Incorrect date, please re-enter";
    }

    // Only jpg, png and jpeg formats
    if( this.state.profilePicUrl === "" || !imgFormat.test(this.state.profilePicUrl) ) {
      flag = false;
      document.getElementById('profilePicError').innerHTML = "Invalid image format (png & jpg only)";
    }

    // Log user data only when every input is valid
    flag && console.log("Name : " + this.state.name + "\nEmail : " + this.state.email + "\nDate Of Birth : " + this.state.dateOfBirth + "\nGender : " + this.state.gender + "\nProfile Pic Url : " + this.state.profilePicUrl + "\nEducation : " + this.state.education + "\nPassword : " + this.state.password + "\nConfirm Password : " + this.state.confirmPassword);

    flag && this.setState({ submitted: true });

    // Reset form on successful submit
    flag && document.getElementById("myForm").reset();

    flag = true;
  }

  render() {
    return (
      <>
        <form id = "myForm" onSubmit={this.handleSubmit}>
          <Name onChange = {this.handleChange} />
          <p style = {{ color: 'red' }} id = "nameError" />
          <Email onChange = {this.handleChange} />
          <p style = {{ color: 'red' }} id = "emailError" />
          <DateOfBirth onChange = {this.handleChange} />
          <p style = {{ color: 'red' }} id = "dobError" />
          <Gender onChange = {this.handleChange} />
          <p style = {{ color: 'red' }} id = "genderError" />
          <ProfilePic onChange = {this.handleChange} />
          <p style = {{ color: 'red' }} id = "profilePicError" />
          <Education onChange = {this.handleChange} />
          <p style = {{ color: 'red' }} id = "educationError" />
          <Password onChange = {this.handleChange} />
          <p style = {{ color: 'red' }} id = "pwdError" />
          <ConfirmPassword onChange = {this.handleChange} />
          <p style = {{ color: 'red' }} id = "confirmPwdError" />
          <input id = "submit" type = "submit" value = "Submit" />
        </form>
        { this.state.submitted && <Table items = {this.state} />}
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <MyForm />
  </React.StrictMode>,
  document.getElementById('root')
);

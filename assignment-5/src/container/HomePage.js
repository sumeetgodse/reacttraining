import React from 'react';
import Name from '../components/Name';
import Email from '../components/Email';
import DateOfBirth from '../components/DateOfBirth';
import Gender from '../components/Gender';
import ProfilePic from '../components/ProfilePic';
import Education from '../components/Education';
import Password from '../components/Password';
import ConfirmPassword from '../components/ConfirmPassword';
import Table from '../components/Table';
import { clear_form_errors, validate_date } from '../utilities/utility.js';

class HomePage extends React.Component {
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
      confirmPassword: "",
      submitted: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({ 
      [event.target.name]: event.target.value 
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    clear_form_errors();
    let flag = true;
    const nameRegexp = /^[a-zA-z]+([\s][a-zA-Z]+)*$/g;
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
    const passwordRegexp = /^(?!^[.])(?!.*[.]$)(?!.*[.]{2})[\w!'`&=~%#/$*+\-^?{}|.]{1,64}$/g;
    const dateRegexp = /^([0-9]{1,2})-([0-9]{1,2})-([0-9]{2,4})$/g;
    const imgFormat = /(\.jpg|\.jpeg|\.png)$/i;

    if( this.state.name === "" || !nameRegexp.test(this.state.name) ) {
        flag = false;
        document.getElementById('nameError').innerHTML = "Invalid name, please re-enter";
    }

    if( this.state.email === "" || !emailRegexp.test(this.state.email) ) {
        flag = false;
        document.getElementById('emailError').innerHTML = "Invalid email, please re-enter";
    }

    if( this.state.password === "" || !passwordRegexp.test(this.state.password) ) {
        flag = false;
        document.getElementById('pwdError').innerHTML = "Invalid password, please re-enter";
    }

    if( this.state.password !== this.state.confirmPassword ) {
        flag = false;
        document.getElementById('confirmPwdError').innerHTML = "Passwords do not match, pleasere-enter";
    }

    if( this.state.gender === "" ) {
        flag = false;
        document.getElementById('genderError').innerHTML = "Please select gender";
    }

    if( this.state.education === "" ) {
        flag = false;
        document.getElementById('educationError').innerHTML = "Please select education";
    }

    if( this.state.dateOfBirth === "" || !dateRegexp.test(this.state.dateOfBirth) || !validate_date(this.state.dateOfBirth) ) {
        flag = false;
        document.getElementById('dobError').innerHTML = "Incorrect date, please re-enter";
    }

    if( this.state.profilePicUrl === "" || !imgFormat.test(this.state.profilePicUrl) ) {
        flag = false;
        document.getElementById('profilePicError').innerHTML = "Invalid image format (png & jpg only)";
    }

    flag && this.setState({ submitted: true });
    flag && document.getElementById("myForm").reset();
    flag = true;
  }
  render() {
    return (
        <>
        <form id = "myForm" onSubmit={this.handleSubmit}>
          <Name onChange = {this.handleChange} />
          <Email onChange = {this.handleChange} />
          <DateOfBirth onChange = {this.handleChange} />
          <Gender onChange = {this.handleChange} />
          <ProfilePic onChange = {this.handleChange} />
          <Education onChange = {this.handleChange} />
          <Password onChange = {this.handleChange} />
          <ConfirmPassword onChange = {this.handleChange} />
          <input type = "submit" value = "Submit" />
        </form>
        { this.state.submitted && <Table items = {this.state} />}
        </>
    );
  }
}
export default HomePage;

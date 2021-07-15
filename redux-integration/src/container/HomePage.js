import React from "react";
import NavBar from "../components/NavBar";
import Form from "../components/Form";
import { addData, editData, store } from "../store/store"
import RecordsRedux from "../components/RecordsRedux";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      act: 0,
      index: ''
    }

    this.txtEmail = React.createRef();
    this.txtName = React.createRef();
    this.pwdRef = React.createRef();
    this.confirmPwdRef = React.createRef();
    this.profilePicRef = React.createRef();
    this.dobRef = React.createRef();
    this.educationRef = React.createRef();
    this.maleRef = React.createRef();
    this.femaleRef = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();

    const userData = store.getState().formReducer[this.state.index];
    const name = this.txtName.current.value;
    const email = this.txtEmail.current.value;
    const password = this.pwdRef.current.value;
    const confirmPassword = this.confirmPwdRef.current.value;
    const profilePicUrl = this.profilePicRef.current.value;
    const dob = this.dobRef.current.value;
    const education = this.educationRef.current.value;
    let gender;
    this.maleRef.current.checked ? gender = "Male" : gender = "Female";
    
    if( this.state.act === 0 ) {
      const newUser = {
        "name": name,
        "email": email,
        "password": password,
        "confirmPassword": confirmPassword,
        "profilePicUrl": profilePicUrl,
        "dob": dob,
        "education": education,
        "gender": gender
      }
      store.dispatch(addData(newUser));
    } else {
      const index = this.state.index;
      userData.name = name;
      userData.email = email;
      userData.password = password;
      userData.confirmPassword = confirmPassword;
      userData.profilePicUrl = profilePicUrl;
      userData.dob = dob;
      userData.education = education;
      userData.gender = gender;
      store.dispatch(editData(index,userData))
    }

    this.setState({
      act: 0
    })
    document.getElementById("myForm").reset();
  }

  handleEdit = (i) =>{
    const data = store.getState().formReducer[i];
    this.txtName.current.value = data.name;
    this.txtEmail.current.value = data.email;
    this.pwdRef.current.value = data.password;
    this.confirmPwdRef.current.value = data.confirmPassword;
    this.dobRef.current.value = data.dob;
    this.educationRef.current.value = data.education;
    data.gender === "Male" ? this.maleRef.current.checked = true : this.femaleRef.current.checked = true;
    
    this.setState({
      act:1,
      index:i
    })
  }

  render() {
    return (
        <div>
        <NavBar />
        <Form maleRef = {this.maleRef} femaleRef = {this.femaleRef} educationRef = {this.educationRef} dobRef = {this.dobRef} profilePicRef = {this.profilePicRef} confirmPwdRef = {this.confirmPwdRef} pwdRef = {this.pwdRef} txtEmail = {this.txtEmail} txtName = {this.txtName} handleSubmit = {(e) => this.handleSubmit(e)} />
        <RecordsRedux handleEdit = {(i) => this.handleEdit(i)} />
        </div>
    )
  }
}

export default HomePage;

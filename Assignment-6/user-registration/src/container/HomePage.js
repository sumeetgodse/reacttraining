import React from "react";
import Records from "../components/Records";
import NavBar from "../components/NavBar";
import Form from "../components/Form";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
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

    let userData = this.state.userData;
    let name = this.txtName.current.value;
    let email = this.txtEmail.current.value;
    let password = this.pwdRef.current.value;
    let confirmPassword = this.confirmPwdRef.current.value;
    let profilePicUrl = this.profilePicRef.current.value;
    let dob = this.dobRef.current.value;
    let education = this.educationRef.current.value;
    let gender;
    this.maleRef.current.checked ? gender = "Male" : gender = "Female";

    if( this.state.act === 0 ) {
      let newUser = {
        "name": name,
        "email": email,
        "password": password,
        "confirmPassword": confirmPassword,
        "profilePicUrl": profilePicUrl,
        "dob": dob,
        "education": education,
        "gender": gender
      }
  
      userData.push(newUser);
    } else {
      let index = this.state.index;
      userData[index].name = name;
      userData[index].email = email;
      userData[index].password = password;
      userData[index].confirmPassword = confirmPassword;
      userData[index].profilePicUrl = profilePicUrl;
      userData[index].dob = dob;
      userData[index].education = education;
      userData[index].gender = gender;
    }

    this.setState({
      userData: userData,
      act: 0
    })
    document.getElementById("myForm").reset();
  }

  handleEdit = (i) =>{
    let data = this.state.userData[i];
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

  handleDelete = (i) => {
    let userData = this.state.userData;
    userData.splice(i,1);
    this.setState({
      userData: userData
    })
  }

  render() {
    let userData = this.state.userData;
    return (
        <div>
        <NavBar />
        <Form maleRef = {this.maleRef} femaleRef = {this.femaleRef} educationRef = {this.educationRef} dobRef = {this.dobRef} profilePicRef = {this.profilePicRef} confirmPwdRef = {this.confirmPwdRef} pwdRef = {this.pwdRef} txtEmail = {this.txtEmail} txtName = {this.txtName} handleSubmit = {(e) => this.handleSubmit(e)} />
        <Records userData = {userData} handleEdit = {(i) => this.handleEdit(i)} handleDelete = {(i) => this.handleDelete(i)} />
        </div>
    )
  }
}

export default HomePage;

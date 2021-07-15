import React from "react";
import Button from '@material-ui/core/Button';
import Name from "./Name";
import Email from "./Email";
import Password from "./Password";
import ConfirmPassword from "./ConfirmPassword";
import ProfilePic from "./ProfilePic";
import DateOfBirth from "./DateOfBirth";
import Gender from "./Gender";
import Education from "./Education";

const Form = (props) => {
        return (
            <form style = {{marginTop: "10px", marginBottom: "10px", borderRadius: "12px", width: "60%", marginLeft: "20%", border: "1px solid black", padding: "5px"}} id = "myForm">
                <h4 style = {{textAlign: "center"}}>Registration Form</h4>
                <div style = {{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Name txtName = {props.txtName} />
                    <Email txtEmail = {props.txtEmail} />
                    <DateOfBirth dobRef = {props.dobRef} />
                </div>
                <div style = {{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <ProfilePic profilePicRef = {props.profilePicRef} />
                </div>
                <div style = {{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Gender maleRef = {props.maleRef} femaleRef = {props.femaleRef} />
                </div>
                <div style = {{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Education educationRef = {props.educationRef} />
                </div>
                <div style = {{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Password pwdRef = {props.pwdRef} />
                    <ConfirmPassword pwdRef = {props.pwdRef} confirmPwdRef = {props.confirmPwdRef} />
                </div>
                <div style = {{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Button style = {{marginTop: "20px"}} variant="contained" color="primary" onClick = {(e) => props.handleSubmit(e)}>
                        Submit
                    </Button>
                </div>
            </form>
        )
}

export default Form;

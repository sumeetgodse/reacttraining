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
            <form style = {{fontFamily: "Inter, sans-serif", marginTop: "10px", marginBottom: "10px", borderRadius: "12px", width: "60%", marginLeft: "20%", padding: "5px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} id = "myForm">
                <div style = {{paddingTop: "20px", paddingBottom: "20px", textAlign: "center", color: "#4a148c", fontSize: "24px"}}><b>REGISTRATION FORM</b></div>
                <div style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style = {{width: "33%"}}>
                        <Name txtName = {props.txtName} />
                        <Email txtEmail = {props.txtEmail} />
                        <DateOfBirth dobRef = {props.dobRef} />
                    </div>
                    <div  style = {{width: "34%", marginTop: "20px"}}>
                        <Gender maleRef = {props.maleRef} femaleRef = {props.femaleRef} />
                        <ProfilePic profilePicRef = {props.profilePicRef} />
                        <Education educationRef = {props.educationRef} />
                    </div>
                    <div  style = {{width: "33%"}}>
                        <Password pwdRef = {props.pwdRef} />
                        <ConfirmPassword pwdRef = {props.pwdRef} confirmPwdRef = {props.confirmPwdRef} />    
                    </div>
                </div>
                <div style = {{display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "20px", paddingBottom: "20px"}}>
                    <Button variant="contained" color="primary" onClick = {(e) => props.handleSubmit(e)}>
                        Submit
                    </Button>
                </div>
            </form>
        )
}

export default Form;

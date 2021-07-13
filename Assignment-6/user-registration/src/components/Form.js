import React from "react";
import Button from '@material-ui/core/Button';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form style = {{margin: "50px auto", display: "flex", alignItems: "center", justifyContent: "center"}} id = "myForm">
                <label style = {{marginLeft: "20px"}}><h2>Name :</h2></label> 
                <input style = {{marginLeft: "20px", height: "30px"}} type = "text" ref = {this.props.txtName} placeholder = "Enter Name" />
                <label style = {{marginLeft: "40px"}}><h2>Email :</h2></label> 
                <input style = {{marginLeft: "20px", height: "30px"}} type = "text" ref = {this.props.txtEmail} placeholder = "Enter Email" />
                <Button style = {{marginLeft: "60px"}} variant="contained" color="primary" onClick = {(e) => this.props.handleSubmit(e)}>
                    Submit
                </Button>
            </form>
        )
    }
}

export default Form;

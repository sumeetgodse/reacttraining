const ProfilePic = (props) => {
    const imgFormat = /(\.jpg|\.jpeg|\.png)$/;

    const handleChange = (e) => {
        if( !imgFormat.test(e.target.value) ) {
            document.getElementById("profilePicError").innerHTML = "Invalid Image format (png, jpg, jpeg only)";
        } else {
            document.getElementById("profilePicError").innerHTML = "";
        }
    }

    return (
        <div style = {{height: "30px", padding: "15px"}}>
            <label style = {{fontSize: "14px"}}>Upload Profile Pic :</label>
            <input style = {{marginLeft: "20px"}} ref = {props.profilePicRef} type = "file" name = "Upload Profile Pic" onChange = {handleChange} />
            <p style = {{color: "red", fontSize: "10px"}} id = "profilePicError" />
        </div>
    )
}

export default ProfilePic;

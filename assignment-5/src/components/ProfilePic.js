const ProfilePic = (props) => {
    return (
        <div>
            <h4>Upload Profile Pic :</h4>
            <input type = "file" name = "profilePicUrl" onChange = {props.onChange} />
            <p style = {{ color: 'red' }} id = "profilePicError" />
        </div>
    )
}

export default ProfilePic;

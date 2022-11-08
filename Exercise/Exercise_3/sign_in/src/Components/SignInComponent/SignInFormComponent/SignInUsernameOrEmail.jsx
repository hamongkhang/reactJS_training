const SignInUser = (props) => {
    return (
        <input className="input" placeholder="Username or email" name="nameormail" onChange={(event) => props.getUserName(event)}></input>
    )
}
export default SignInUser;
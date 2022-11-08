const SignInPassword = (props) => {
    return (
        <input className= "input" placeholder="Password" name="password" onChange={(event) => props.getPassword(event)} ></input>
    )
}
export default SignInPassword;
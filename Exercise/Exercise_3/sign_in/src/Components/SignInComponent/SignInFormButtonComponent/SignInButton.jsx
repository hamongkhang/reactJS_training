const SignInButton = (props) => {
    return (
        <button className ="signInSubmit" onClick={()=>props.SignIn()} > Sign In</button>
    )
}
export default SignInButton;
const SignUpButton = (props) => {
    return (
        <button className="signUpSubmit" onClick={()=>props.SignUp()} > Sign Up</button>
    )
}
export default SignUpButton;
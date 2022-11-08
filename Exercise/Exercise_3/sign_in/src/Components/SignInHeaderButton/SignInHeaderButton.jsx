import { Link } from "react-router-dom";
const SignInHeaderButton = () =>{
    return (
        <button className="header"><Link to='/SignIn' className='nav-link'>Sign In</Link> </button>
    )
}
export default SignInHeaderButton;
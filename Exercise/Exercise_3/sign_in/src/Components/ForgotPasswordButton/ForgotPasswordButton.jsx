import { Link } from "react-router-dom";
const ForgotPasswordButton = () =>{
    return (
        <button className ="forgotPasswordB"><Link to='/ForgotPassword' className='nav-link'>Forgot Password</Link> </button>
    )
}
export default ForgotPasswordButton;
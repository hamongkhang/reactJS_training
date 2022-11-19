import SignInUser from "../Components/SignInComponent/SignInFormComponent/SignInUsernameOrEmail";
import SignInButton from "../Components/SignInComponent/SignInFormButtonComponent/SignInButton";
import SignInCheckbox from "../Components/SignInComponent/SignInFormComponent/SignInCheckbox";
import SignInPassword from "../Components/SignInComponent/SignInFormComponent/SignInPassword";
import ForgotPassword from "../Components/SignInComponent/SignInFormComponent/ForgotPassword";
import ForgotPasswordButton from "../Components/ForgotPasswordButton/ForgotPasswordButton";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";


const SignInCpn = () => {
    const [inputName, setInputName] = useState("");
    const getUserName = (event) => {
        setInputName(event.target.value);
        console.log(inputName);
    }
    const [inputPassword, setInputPassword] = useState("");
    const getPassword = (event) => {
        setInputPassword(event.target.value);
        console.log(inputPassword);
    }
    const SignIn = () => {
        if (inputName === "Admin" && inputPassword === "123")
            alert("Logging in");
        else alert("Wrong password. Try again or click Forgot password to reset it.");
    }
    return (
        <div className="SI">
            <SignInUser getUserName={getUserName} />
            <SignInPassword getPassword={getPassword} />
            <div className="check_forgot">
                <SignInCheckbox />
                <div className="forgotPassword">
                    <ForgotPasswordButton />
                    <Routes>
                        <Route path='/ForgotPassword' element={<ForgotPassword />} />
                    </Routes>
                </div>
            </div>
            <SignInButton SignIn={SignIn} />
        </div>
    )
}
export default SignInCpn;
import SignUpUser from "../Components/SignUpComponent/SignUpEmailOrPhonenum/SignUpUsernameOrEmail";
import SignUpPassword from "../Components/SignUpComponent/SignUpPassword/SignUpPassword";
import SignUpButton from "../Components/SignUpComponent/SignUpFormComponent/SignUpButton";
import { useState } from "react";

const SignUpCpn = () => {
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

    return (
        <div className="SU">
            <SignUpUser getUserName={getUserName}/>
            <SignUpPassword getPassword={getPassword}/>
            <SignUpButton />
        </div>
    )
}
export default SignUpCpn;
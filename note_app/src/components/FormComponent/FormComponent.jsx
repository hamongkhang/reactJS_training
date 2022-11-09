import { useState } from "react";
import FormHeader from "../FormHeader/FormHeader";
import FormButton from "../ButtonComponent/FormButtonComponent";
import FormInput from "../FormInput/FormInput";

const FormComponent = (props) => {
    return (
        <div>
            <div id="top_body">
                <FormHeader />
                <FormInput newToDo = {props.newToDo} setNewToDo={props.setNewToDo}/>
                <div id="white_line" />
                <FormButton pushToDo={props.pushToDo}/>
            </div>
        </div>
    )
}
export default FormComponent;
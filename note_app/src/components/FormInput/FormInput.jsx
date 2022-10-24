import React, { useState } from "react";
const FormInput = (props)=>  {
    
    const Add = (event) =>
    {
        var value = event.target.value;
        var field = event.target.name;

        props.setNewToDo({
            ...props.newToDo,
            [field]:value
        })
    }

    return (
            <input id="enterTask" placeholder="Enter task" name="work" value={props.newToDo.work} onChange={(event)=>Add(event)}  />
    )
}
export default FormInput;
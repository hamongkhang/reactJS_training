const FormButton = (props) => { 
    return (
        <>
            <button id="submit" className="submit" onClick={()=>props.pushToDo()} >Submit</button>
        </>
    )
}
export default FormButton;
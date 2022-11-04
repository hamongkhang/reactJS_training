const FormInputNum1 = (props) => {
    return (
        <div  className="number">Num1 <input className="number1" onChange={(event) => props.getNumber1(event)}></input></div>
    )
}
export default FormInputNum1;
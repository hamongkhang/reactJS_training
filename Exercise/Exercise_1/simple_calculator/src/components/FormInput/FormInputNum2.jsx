const FormInputNum2 = (props) => {
    return (
        <div>Num2 <input className="number2" onChange={(event) => props.getNumber2(event)}></input></div>
    )
}
export default FormInputNum2;
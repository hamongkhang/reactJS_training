const CalculationButton = (props) => {
    return (
        <button className="cal" onClick={() => props.Calculate(props.calculator)} > {props.calculator}</button>
    )
}
export default CalculationButton;
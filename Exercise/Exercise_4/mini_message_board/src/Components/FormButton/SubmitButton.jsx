const SubmitButton = (props) => {
    return (
        <button className="submit" onClick={()=>props.Submit(props.button) }>{props.button}</ button>
            )
}
export default SubmitButton;
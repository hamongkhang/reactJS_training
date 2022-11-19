const InputMessage = (props) =>{
    return(
        <input className="message" placeholder="Message" onChange={(event)=>props.AddMessage(event)} style={{backgroundColor:" rgb(10, 99, 140)", border:"none",  padding:"10px 260px 120px 10px", borderRadius:"10px", color:"white"}}></input>
    )
}
export default InputMessage;
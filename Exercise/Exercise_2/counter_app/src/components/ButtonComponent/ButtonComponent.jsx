const Button = (props) =>{
    return(
        <button className="button" onClick={()=>props.Change(props.button)} style = {{backgroundColor:props.button==="Decrement"?"red":"green", marginRight:"2px", color:"white", border:"1px solid black"}}>{props.button}</button>
    )
}
export default Button;
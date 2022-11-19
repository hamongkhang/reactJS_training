const InputTitle = (props) =>{
    return(
        <input className="title" placeholder="Title" onChange={(event)=>props.AddTitle(event)} style={{backgroundColor:" rgb(10, 99, 140)", border:"none",  padding:"9px 20px 9px 20px", borderRadius:"10px", color:"white"}}></input>
    )
}
export default InputTitle;
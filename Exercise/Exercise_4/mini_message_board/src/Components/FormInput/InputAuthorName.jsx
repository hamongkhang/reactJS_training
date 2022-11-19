const InputAuthorName = (props) =>{
    return(
        <input className="author" placeholder="Author" name = "author" onChange={(event)=>props.AddAuthorName(event)} style={{backgroundColor:" rgb(10, 99, 140)", border:"none", padding:"9px 20px 9px 20px", borderRadius:"10px", color:"white", marginRight:"30px"}}></input>
    )
}
export default InputAuthorName;
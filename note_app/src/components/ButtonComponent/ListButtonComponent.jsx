const ListButton = (props) => {
    return (
        <>
            <button id="edit" onClick={props.title==="delete"?()=>props.deleteToDo(props.index):null} style={{ backgroundColor: props.title == "edit" ? "blue" : "red", marginRight:"50px", marginLeft: props.title=="edit" ? "200px":"0px"}}><label for="control-modal">{props.title}</label></button>
        </>
    )
}
export default ListButton;
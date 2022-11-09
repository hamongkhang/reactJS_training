import ListButton from "../ButtonComponent/ListButtonComponent"
const RightListButton = (props) => {
    return (
        <>
            <ListButton title="edit" />
            <ListButton title="delete" deleteToDo={props.deleteToDo} index={props.index}/>
        </>
    )
}
export default RightListButton;
import RightListButton from "../ListComponent/RightListComponent"
function LeftList(props) {
    return (
        <div id="bottom_body">
        <div id="works">
          <table>
            <tbody id="listWork"> 
              {props.toDo ? props.toDo.map((item,index) => (
                <>
                  <div id="listWorkSpace">
                    <tr >
                      <div id="content">{item.work}</div>
                      <RightListButton deleteToDo={props.deleteToDo} index={index}/> 
                    </tr>
                  </div>
                  <hr></hr>
                </>
              )) : null}
            </tbody>
          </table>
        </div>
      </div >
    )
}
export default LeftList;
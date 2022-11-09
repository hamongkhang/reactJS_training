import './App.css';
import { useState } from 'react';
import FormComponent from './components/FormComponent/FormComponent';
import LeftList from './components/ListComponent/LeftListComponent';

function App() {
  const [toDo, setToDo] = useState([]);
  const [newToDo, setNewToDo] = useState({ work: "" });

  const pushToDo = () => {
    toDo.push(newToDo);
    setToDo(toDo);
    setNewToDo({ work: "" });
  }

  const deleteToDo = (index) => {
    toDo.splice(index, 1);
  }

  return (
    <div>
      <div id="container">
        <center>
          <div id="body_container">
            <FormComponent newToDo={newToDo} setNewToDo={setNewToDo} pushToDo={pushToDo} />
            <LeftList toDo={toDo} deleteToDo={deleteToDo} />
            <input type="checkbox" id="control-modal" className="inputCheckbox" />
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h3>EDIT</h3>
                  <label htmlFor="control-modal" className="modal-close">X</label>
                </div>
                <div className="modal-body">
                  <div id="showEditComponent" />
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
      <div id="showEditComponent" />
    </div>
  );
}

export default App;

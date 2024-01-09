import React from 'react';
import { TodoContext } from '../TodoContext';
import "./CreateTodoButton.css";

function CreateTodoButton() {

  
  const {
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
  

  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("le diste click");
        console.log(event);
        console.log(event.target);
        // setOpenModal(!openModal); // Mi solución
        setOpenModal(state => !state)
         
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };

import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage"

// localStorage.removeItem('TODOS_V1', defaultTodos);
// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el Curso de Intro a React.js", completed: false },
//   { text: "Llorar con la Llorona", completed: false },
//   { text: "LALALALALA", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));


function App() {
  // const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState("");

  console.log("Los usuarios buscan todos de " + searchValue);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  // Filter the items with the searchbar
  const searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }
  );

  // Update status of each item function:
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    // newTodos[todoIndex].completed = true; // This only turn a item to complete
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // this toggle the status
    saveTodos(newTodos);
  };
  
  // Delete item function:
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );

}

export default App;

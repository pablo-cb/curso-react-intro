import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider({ children }) {
    // const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

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
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider }
import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {

  const {
    searchValue, 
    setSearchValue,
  } = React.useContext(TodoContext)
 
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
        // console.log('Escribiste: ');
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };



import React from "react";

function useLocalStorage(itemName, initialValue){
/* In this fuction we are using an abstraction to be able to save
    any information in the localStorage so we are saving in the localStorage
    the information as a item
*/

    const [item, setItem] =  React.useState(initialValue); // Here we are using our own localStorage custom hook
    const [loading, setLoading] =  React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                
                setLoading(false);
            } catch(error) {
                setLoading(false);
                setError(true);
            }
        }, 2000)
    }, []);

    // Update Status in localStorage
    const saveItem= (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
    };

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage }
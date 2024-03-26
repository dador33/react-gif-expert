import { useState } from "react"

export const AddCategory = ({OnNewCategory}) => {
  
    const [inputValue, setinputValue] = useState('')
  
    const onInputChange = (event) => {
        //console.log(event.target.value);
        setinputValue (event.target.value);
        
    }


    const onSubmit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim().length <= 1) return;

        console.log(inputValue);
        OnNewCategory(inputValue.trim());   
        //setCategories( cats => [inputValue, ...cats]);

        setinputValue (''); 
    }

  
    return (
    <form onSubmit={ (event) => onSubmit(event)} >
        <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ onInputChange}
        />
    </form>
  )
}

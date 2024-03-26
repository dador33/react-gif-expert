import React from 'react'
import { useState } from 'react'
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        // categories.push(newCategory);
        //console.log(newCategory);
        setCategories([newCategory, ...categories]);
    }
    //console.log({categories});


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                OnNewCategory={(value) => onAddCategory(value)}
            //setCategories={setCategories} 
            />
                {
                    categories.map((category) => 
                     (
                          <GifGrid key={category} 
                            category={category}/>
                     )
                   )
               }
        </>
    )
}

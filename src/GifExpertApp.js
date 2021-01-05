import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () =>{
    // const categories = ['One punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = ( ) =>{
    //     // setCategories( [...categories, 'Juanito anime'] );
    //     setCategories( catego => [...catego, 'Juanito anime'] );
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr />
            
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        category = { category }
                        key = { category }
                        />
                    ) )
                }
            </ol>
        </>
    );
} 

export default GifExpertApp;
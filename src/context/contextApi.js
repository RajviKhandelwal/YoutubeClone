import React, { createContext, useState, useEffect } from 'react'
import { fetchDataFromApi } from '../utils/api';

export const Context = createContext();

//component
export const AppContext = (props) =>{

    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {

      fetchSelectedCategoryData(selectedCategory);

    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query) => {

        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(( {contents} ) => {
       
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        });

    };

    //value me joh pass kare woh globally available rahega throughout the project
    return(
        <Context.Provider  value={{loading,setLoading,searchResults,selectedCategory,setSelectedCategory,mobileMenu,setMobileMenu,}}>

            {props.children}

        </Context.Provider>
    )
    
}
import React, { useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';


const App = () => {
  
  const APP_ID = "7a38b527";
  const APP_KEY = "8a000de77addd5d56337939b7b6a519a";
  
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState ('chicken')

  useEffect(()=> {
   GetRecipes();
  }, [query]);

  const GetRecipes = async () => {
    const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
const data = await response.json();
setRecipes(data.hits);
console.log(data.hits)
  };

  const updateSearch = e =>{
setSearch(e.target.value);

  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit= {getSearch} className= "search-from">
        <input className= "search-bar" type= "text" value={search} placeholder="Keyword" onChange={updateSearch}/>
        <button className= "search-button" type= "submit">Search</button>    
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image= {recipe.recipe.image}
        ingredients= {recipe.recipe.ingredients}
        />
      ))};
      </div>
        </div>
   
  );
};
export default App;

import React from 'react';
import style from "./recipe.module.css";

const Recipe = ({title,calories,image, ingredients}) => {
  return(
<div className={style.recipe}>
  <h1>{title}</h1>
  <img className={style.image} src={image} alt=""/>
  <ul classNanme="list">
    {ingredients.map(ingredient=>(
      <li>{ingredient.text}</li>
    ))}
  </ul>

  <p><em><strong>Calories: </strong>{calories}</em></p>
  </div>

  );
}



export default Recipe;
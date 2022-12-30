import React from "react";
import "./style.css" 
const Recipe = ({tittle,calories,image,ingredients})=>{

    
    
    return(
        <div className="recipe-card">
           <h1>{tittle}</h1> 
           <ol>
             {ingredients.map(e=>(
                <li>{e.text}</li>
             ))}
           </ol>
           <p>Calories : {calories}</p>
           <img className="image" src={image} alt=""/>
        </div>
    );
}
export default Recipe;
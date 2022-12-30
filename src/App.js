
import './App.css';
import Recipe from './Components/Recipe';
import {useState,useEffect} from "react"

function App() {
  const[recipe,setRecipes]=useState([]);
  const[search,setSearch] = useState("");
  const[query,setQuery] = useState("");
  
  const applicationId = "a3f740ec";
  const applicationKeys = "56d6f29e3393c24f4a6ef683e9b5e5a9&type=public";
  
  useEffect(()=>{
      fetch(`https://api.edamam.com/api/recipes/v2?q=${query}&app_id=${applicationId}&app_key=${applicationKeys}`).then(res=>res.json()).then(data=>{setRecipes(data.hits); console.log(data.hits)})
     
  },[query]);
  
  const getSearch=()=>{
   
    setQuery(search);
     //setSearch("");
  };
 
  return (
    
    <div className="App">
      
        <input className="search-input" type="text"
         onChange={(e)=>{setSearch(e.target.value)}}/>
        <button className='search-button' onClick={getSearch}>search</button>
        <div className='recipe'>
        {recipe.map(r=>(
          <Recipe
          key={r.recipe.label}
          tittle={r.recipe.label}
          calories={r.recipe.calories}
          image={r.recipe.image}
          ingredients={r.recipe.ingredients}
          />
       ) )}
         
        </div>
    </div>
  );
}

export default App;

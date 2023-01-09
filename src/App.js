import { useEffect, useState } from 'react';
import './App.css';
import video from "./food.mp4";
import MyRecipesComponent from './MyRecipesComponent';
import search from "./search.png";


function App() {

const myID = "17a37332";
const myKEY = "156a669a38e87c08b2d234420a9f13d8";

const[mySearch, setMySearch]= useState("");
const[myRecipes, setMyRecipes]= useState([]);
const[wordSubmitted, setWordSubmitted]=useState("avocado");


useEffect(()=>{
  const getRecipe= async()=>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${myID}&app_key=${myKEY}`);
    const data = await response.json();
    setMyRecipes(data.hits);
    }
getRecipe();
}, [wordSubmitted]);





const myRecipeSearch=(e)=>{
  setMySearch(e.target.value);
}

const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}



  return (
    <div className="App">

  <div className="container">
  <video autoPlay muted loop>
   <source src={video} type="video/mp4" />
</video>
  <h1>Find a Recipe</h1>
  </div>

<div className='container'>
  <form onSubmit={finalSearch}>
    <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
   
  </form>
   <button>
    <img src={search} className='icons' alt='search'/>
  </button>
  </div>


 <div className='container'>
  <h2>{myRecipes.length} Resipes with {wordSubmitted}</h2>
 </div>
  





  <div className='recipe'>
  {myRecipes.map((element, index) =>(
<MyRecipesComponent key={index}
label={element.recipe.label} 
image={element.recipe.image} 
calories={element.recipe.calories}  
ingredient={element.recipe.ingredientLines} 
dishType={element.recipe.dishType}
link={element.recipe.url}
/>
  ))}
  </div>




 </div>

  );
}

export default App;

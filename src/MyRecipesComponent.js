function MyRecipesComponent({label, calories, image, ingredient, link, dishType}) {
    return(<div className="recipe">
       <h2>{label}</h2> 
       <img src={image} alt="food"/>
       <h2>{dishType}</h2> 
       <h2>{calories.toFixed()} calories</h2> 
<ul className="list">
    {ingredient.map((ingredient,index) =>
        ( <li className="el" key={index}>{ingredient}</li>)
        )}
</ul>
<a href={link}>Open recipe</a>

      
    </div>)
}

export default MyRecipesComponent;
import { useEffect, useState } from 'react';
import './App.css';
import MyComponent from './MyComponent';

function App() {

  const MI_ID = "544a17c5";
  const MY_KEY = "78d1a40703c48e04097cd70429c8cb28";
 
  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('avocado');

  useEffect(() => {
    const getRecipes = async () => {
      const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MI_ID}&app_key=${MY_KEY}&diet=balanced&health=vegan`);
      const data = await responce.json();
      setMyRecipes(data.hits);
      console.log(data.hits);
    }
    getRecipes();
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }


  return (
  
  <div className="App">
      <h1>Search for balanced vegan recipes</h1>

      <div className='container'>
  <form onSubmit={finalSearch}>
    <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
    </input>
  </form>
  </div>

 <div>
  {myRecipes.map(element => (
    <MyComponent
      label={element.recipe.label}
      cuisineType={element.recipe.cuisineType}
      image={element.recipe.image}
      calories={element.recipe.calories}
      ingredients={element.recipe.ingredientLines}
     />
  ))}
 </div>

    </div>

   
  );
}

export default App;

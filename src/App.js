import {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Ingredient from './components/Ingredient'

function App() {
  const[ingredients,setIngredients]=useState([])
  const[state,setState]=useState("");

  const onSubmitHandler=(e) =>{
    e.preventDefault();
    
    setIngredients([...ingredients,state])
  }
  return (
    <div className="App col-5 max-auto center">
      <h1>Ingredient Form</h1>
      <form onSubmit={onSubmitHandler}>
        <input className="form-control" onChange={(e)=>setState(e.target.value)}/>
        <input type="submit" className="btn btn-primary mt-3" value="add"/>
      </form>
    
      <ul>
        {
        // ingredients.map((ingredient,i)=><li>Ingredients {i}:{ingredient}</li>)
        ingredients.map((item,i)=><Ingredient key={i} text={item}/>)
        }
      </ul>
    </div>
  );
}

export default App;

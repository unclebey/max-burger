import React from "react";
import classes from '../Bread/Bread.module.css'
import BurgerIngredients from "./BurgerIngredients";


const Bread = (props) =>{
  let newIngredients = Object.keys(props.ingredients).map((igKey)=>{
  return [...Array(props.ingredients[igKey])].map((_, i)=>{
    return <BurgerIngredients key={igKey + i} type={igKey}/>
    })
  }).reduce((arr, el)=>{
  return arr.concat(el)
},[])
if (newIngredients.length === 0){
  newIngredients = <h1>PLEASE START ADDING INGREDIENTS</h1>
}
  return(
    <div className={classes.Bread}>
      <BurgerIngredients type = 'bread-top'></BurgerIngredients>
      {newIngredients}
      <BurgerIngredients type = 'bread-bottom'></BurgerIngredients>
  

    </div>
  )}

export default Bread;
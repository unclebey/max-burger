import React, { Component } from 'react'
import Aux from '../../hoc/Auxilliary'
import Bread from '../../components/Bread/Bread'
import BuildControls from '../../components/Bread/BuildControls/BuildControls';


const INGREDIENTS_PRICES ={
    salad: 50,
    cheese: 100,
    bacon: 70,
    meat: 10,
}





class Burger extends Component{

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0,
        }, 
        totalPrice: 500,
    }

addIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount+1
    const updateIngredients = {
        ...this.state.ingredients
    }
updateIngredients[type] = updatedCount;
const priceAddition = INGREDIENTS_PRICES[type]
const oldPrice = this.state.totalPrice
const newPrice = oldPrice + priceAddition
this.setState({
    totalPrice: newPrice,
    ingredients: updateIngredients

})

}

deleteIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount-1
    const updateIngredients = {
        ...this.state.ingredients
    }
updateIngredients[type] = updatedCount;
const priceDeletion = INGREDIENTS_PRICES[type]
const oldPrice = this.state.totalPrice
const newPrice = oldPrice - priceDeletion
this.setState({
    totalPrice: newPrice,
    ingredients: updateIngredients

})

}






render(){
    return(
        <Aux>
            <Bread ingredients = {this.state.ingredients}/>
            <BuildControls 
            ingredientAdded = {this.addIngredientHandler}
            ingredientDelete ={this.deleteIngredientHandler} />
            
        </Aux>
    
    )

}
}


export default Burger;
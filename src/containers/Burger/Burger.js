import React, { Component } from 'react'
import Aux from '../../hoc/Auxilliary'
import Bread from '../../components/Bread/Bread'

class Burger extends Component{

    state = {
        ingredients: {
            salad: 0,
            cheese: 5,
            bacon: 0,
            meat: 0,
        }
    }

render(){
    return(
        <Aux>
            <Bread ingredients = {this.state.ingredients}/>
             <h2>Control</h2>

        </Aux>

    )

}
}


export default Burger;
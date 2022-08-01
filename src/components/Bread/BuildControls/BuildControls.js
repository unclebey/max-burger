import React from "react";
import classes from '../BuildControls/BuildControls.module.css'
import BuildControl from "./BuildControl/BuildControl";



const Control = [
  {label: "cheese", type: "cheese"},
  {label: "salad", type: "salad"},
  {label: "meat" , type: "meat"},
  {label: "bacon", type: "bacon"}
  
]


const BuildControls = (props ) =>{
  return(


    
          <div className={classes.BuildControls}>
            <h1>Price: {props.Price}</h1>
            {Control.map(ctrl =>{ 
              return <BuildControl
              key = {ctrl.label}
              label = {ctrl.label}
              added = {()=>props.ingredientAdded(ctrl.type)}
              delete ={()=>props.ingredientDelete(ctrl.type)}
              disabled = {props.disabled[ctrl.type]}
              
            />
          })}
          </div>
        
  )
}




export default BuildControls;
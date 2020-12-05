import React from 'react';
import '../BuildControls/BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
  console.log(props.purchasable)
  return(
    <div className='BuildControls'>
      <h2>Current Price: <strong>{props.price.toFixed(2)}</strong></h2>
      {controls.map(ctrl => (
        <BuildControl 
          key={ctrl.label} 
          label={ctrl.label} 
          added={() => props.ingredientAdded(ctrl.type)} 
          remove={() => props.ingredientRemove(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <br/><br />
      <button className='OrderButton' disabled={!props.isthisPurchasable} onClick={props.ordered}>ORDER NOW</button>
      <br /><br />
  </div>
  )
}

export default buildControls;
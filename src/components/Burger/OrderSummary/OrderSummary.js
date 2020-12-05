import React from 'react';
import Aux from '../../../hoc/Aux';
import '../OrderSummary/OrderSummary.css';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey => {
  return <li 
    key={igKey+props.ingredients[igKey]}>
    <strong>{igKey.toUpperCase()}</strong>: 
    {props.ingredients[igKey]
    }
  </li>
  });
  return(
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <button className='Button Danger' onClick={props.purchaseCancelled}>CANCEL</button>
      <button className='Button Success' onClick={props.purcaseContinued}>CONTINUE</button>
    </Aux>
  );
}

export default orderSummary;
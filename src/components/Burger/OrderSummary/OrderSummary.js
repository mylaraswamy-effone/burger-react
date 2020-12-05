import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import '../OrderSummary/OrderSummary.css';

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[ OrderSummary Will Update]')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
    return <li 
      key={igKey+this.props.ingredients[igKey]}>
      <strong>{igKey.toUpperCase()}</strong>: 
      {this.props.ingredients[igKey]
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
      <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <button className='Button Danger' onClick={this.props.purchaseCancelled}>CANCEL</button>
      <button className='Button Success' onClick={this.props.purcaseContinued}>CONTINUE</button>
    </Aux>
    )
  }

}
export default OrderSummary;
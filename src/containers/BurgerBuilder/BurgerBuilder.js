import React, { Component } from "react";
import Aux from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
      ingredients: {
          salad: 0,
          bacon: 0,
          meat: 0,
          cheese: 0
      }
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>BurgerControl</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;

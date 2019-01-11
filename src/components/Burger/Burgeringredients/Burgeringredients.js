import React, {Component} from "react";
import "./Burgeringredients.css";
import PropTypes from "prop-types";

class BurgerIngredients extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case "bread-bottom":
                ingredient = <div className="BreadBottom"/>;
                break;
            case "bread-top":
                ingredient = (
                    <div className="BreadTop">
                        <div className="Seeds1"/>
                        <div className="Seeds2"/>
                    </div>
                );
                break;
            case "meat":
                ingredient = <div className="Meat"/>;
                break;
            case "cheese":
                ingredient = <div className="Cheese"/>;
                break;
            case "bacon":
                ingredient = <div className="Bacon"/>;
                break;
            case "salad":
                ingredient = <div className="Salad"/>;
                break;
            default:
                break
        }
        return ingredient;
    }
}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
};
export default BurgerIngredients;
import React, {Component} from 'react'
import { connect } from 'react-redux';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        }
    }

    render() {    
        return (
            <div>
                <p>{this.props.cartItems ? this.props.cartItems[0].id : "No items in cart"}</p>
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        cartItems: state.cart.cartItems
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Cart);
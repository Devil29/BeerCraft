import React, {Component} from 'react'
import { connect } from 'react-redux';
import './css/CartPage.scss';
import { userInfo } from 'os';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        }
    }

    editItemInCart(event){
        console.log("Edit Item called");
    }

    removeItemFromCart = (event) => {
        console.log("Remove Item called");
        let itemId = event.target.id;
        let items = this.props.cartItems;
        let index=0;
        for(let i=0; i<items.length; i++) {
            if(items[i].id == itemId) {
                index = i;
            }
        }
        items.splice(index, 1);
        this.setState({cartItems: items});
    }

    componentWillMount(){
        console.log("Cart page", this.props.cartItems);
    }

    getTotalCartValue(){
        return (<div className="col-md-4 col-xs-12">
                <div className="card card-custom"> 
                    <div className="card-body">
                        <h5 className="card-title">{"Total Price"}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{"1000"}</h6>
                        <p className="card-text">{"You are eligble for free delivery"}</p>
                        <button className="btn btn-primary" id="procced-to-buy" onClick={e=> this.editItemInCart(e)}>Proceed To Buy</button>
                    </div>
                </div>
            </div>
            );
    }

    render() {    
        return (
            <div className="cart-page">
                <div className="row">
                    <div className="col-md-8 col-xs-12">
                        {this.props.cartItems.map((cartItem, index) => {
                        return <div className="row card card-custom" key={index}>
                                    <div className="col-md-2 col-xs-4">
                                        <img className="card-img-top image-custom" src={require(`../assets/Beericon.png`)} alt="Card cap"></img>
                                    </div>
                                    <div className="col-md-10 col-xs-6">
                                        <div className=""> 
                                            <div className="card-body">
                                                <h5 className="card-title">{cartItem.name}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{cartItem.style}</h6>
                                                <p className="card-text">{cartItem.ounces}, {cartItem.abv}, {cartItem.ibu}, {cartItem.count}</p>
                                                <button className="btn btn-link" id={cartItem.id} onClick={e=> this.editItemInCart(e)}>Edit</button>
                                                <button className="btn btn-link" id={cartItem.id} onClick={e=> this.removeItemFromCart(e)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        })}
                    </div>
                    { (this.props.cartItems && this.props.cartItems.length > 0) ? this.getTotalCartValue() : "" }
                </div>
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
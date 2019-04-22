import React, {Component} from 'react'

const contentBody = {
    border: '1px solid',
    marginTop: '20px',
    padding: '10px',
    paddingLeft: '20px',
    backgroundColor: "gray" 
}

//TO get this value from store
function getUserMoney(){
    return 1000
}

class Home extends Component{
    render(){
        return (
            <div style={contentBody}>
                <h1>Search and buy your favourite Beers </h1>
                <p>you can search Them by the name and type</p> 
                <p>Click on the cart to proceed to the checkout</p>
                <br></br>
                <h3> Your Funds: { getUserMoney() }  </h3> 
            </div>
        );
    }
}

export default Home;
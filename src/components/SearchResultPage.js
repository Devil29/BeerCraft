import React, {Component} from 'react'
import axios from 'axios'

// http://starlord.hackerearth.com/beercraft
// To get this value from store which which get from api

class SearchResultPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            beerData: []
        }
    }
    temporayBeerData() {
        axios.get('https://vue-js-e14f0.firebaseio.com/beers.json')
        .then(res => {
            console.log(res)
            this.setState({beerData: res.data});
        })
        .catch(error => console.log(error))
    }
    render(){
        this.temporayBeerData();
        return (
            <div>
                <ul>
                {this.state.beerData.map((value, index) => {
                    return <li key={index}>{value.name}</li>
                })}
                </ul>
            </div>
        );
    }
}

export default SearchResultPage;
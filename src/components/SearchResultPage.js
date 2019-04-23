import React, {Component} from 'react'
import axios from 'axios'
import './css/SearchResultPage.css';

// http://starlord.hackerearth.com/beercraft
// To get this value from store which which get from api

class SearchResultPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            beerData: [],
            searchValue: "",
            displayBeers: []
        }
    }

    temporayBeerData() {
        axios.get('https://vue-js-e14f0.firebaseio.com/beers.json')
        .then(res => {
            console.log(res)
            let beerData = res.data;
            beerData = beerData.splice(0,200); //Taking first 200 rest to be handled by Pagination
            this.setState({beerData});
            this.renderedBeers();
        })
        .catch(error => console.log(error))
    }

    searchItem = (event) => {
        event.preventDefault();
        console.log(this.state.searchValue);
        let searchValue = this.state.searchValue;
        this.renderedBeers(searchValue);
    }

    renderedBeers(searchValue){
        if(!searchValue || searchValue===""){
            this.setState({displayBeers: this.state.beerData});
            return;
        }
        let beerData = this.state.beerData.filter((beer) => {
            let beerName = beer.name.toLowerCase()
            return beerName.indexOf(searchValue.toLowerCase()) !== -1
        });
        this.setState({displayBeers: beerData});
        return;
    }

    onSearchChange = (event) => {
        this.setState({
            searchValue: event.target.value
        });
    }

    componentWillMount() {
        console.log('component will mount');
        this.temporayBeerData(); // Calling Apis as soon as the Component Mount
    }
    componentWillUnmount() {
        console.log('component will unmount');
    }

    render(){
        return (
            <div>
                <form className="example">
                    <input type="text" placeholder="Search your favourite beer.." onChange={this.onSearchChange} name="search"></input>
                    <button type="submit" onClick={this.searchItem}>Search</button>
                </form>
                <br></br>
                <div className="row">
                    {this.state.displayBeers.map((value, index) => {
                        return <div className="col-sm-3" key={value.id}>
                            <div className="card card-custom">
                                <img className="card-img-top" className="image-custom" src={require(`../assets/Beericon.png`)} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Name - {value.name}</h5>
                                    <p className="card-text">Style  - {value.style}</p>
                                    <p className="card-text-2">Ounces - {value.ounces}</p>
                                    <button className="btn btn-primary">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default SearchResultPage;
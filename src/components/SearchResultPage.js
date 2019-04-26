import React, {Component} from 'react'
import axios from 'axios'
import './css/SearchResultPage.scss';
import * as ACTIONS from '../store/actions/action';
import { connect } from 'react-redux';

class SearchResultPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchValue: "",
            displayBeers: [],
            selectedBeer: null
        }
    }

    getBeerData() {
        axios.get('https://vue-js-e14f0.firebaseio.com/beers.json')
        .then(res => {
            console.log(res)
            let beerData = res.data;
            beerData = beerData.splice(0,200); //Taking first 200 rest to be handled by Pagination
            this.props.successBeerdata(beerData);
            this.renderedBeers();
        })
        .catch(error => {
            console.log(error)
            this.props.failureBeerdata();
        })
    }

    searchItem = (event) => {
        event.preventDefault();
        console.log(this.state.searchValue);
        let searchValue = this.state.searchValue;
        this.renderedBeers(searchValue);
    }

    renderedBeers(searchValue){
        let storeBeerData = this.props.storeBeerData;
        if(!searchValue || searchValue===""){
            this.setState({displayBeers: storeBeerData});
            return;
        }
        let beerData = storeBeerData.filter((beer) => {
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
        if(this.props.storeBeerData && this.props.storeBeerData.length > 0){
            console.log("Value is there in the store");
            this.renderedBeers(); // Just update local data from store
        } else {
            this.getBeerData(); //Call api and update data in store
        }
    }
    componentWillUnmount() {
        console.log('component will unmount');
    }

    openModelToSelectBeer = (value) => {
        this.setState({selectedBeer: value})
    }

    addBeerToCart = (event) => {
        console.log(this.state.selectedBeer);
        console.log(event);
        if (this.refs.itemCount) {
            console.log(this.refs.itemCount.value);
        }
    }

    render(){
        return (
            <div className="search-page">
                <form className="example">
                    <input type="text" placeholder="Search your favourite beer.." onChange={this.onSearchChange} name="search"></input>
                    <button type="submit" onClick={this.searchItem}>Search</button>
                </form>
                <br></br>
                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">{this.state.selectedBeer && this.state.selectedBeer.name}</h4>
                                <p>Ounces - {this.state.selectedBeer && this.state.selectedBeer.ounces}</p>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label for="itemCount">Count: </label>
                                    <select className="form-control" id="itemCount" ref="itemCount">
                                        <option id="1" value="1">1</option>
                                        <option id="2" value="2">2</option>
                                        <option id="3" value="3">3</option>
                                        <option id="4" value="4">4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.addBeerToCart}  data-dismiss="modal">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {this.state.displayBeers.map((value, index) => {
                        return <div className="col-sm-3" key={value.id}>
                            <div className="card card-custom">
                                <img className="card-img-top image-custom" src={require(`../assets/Beericon.png`)} alt="Card cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Name - {value.name}</h5>
                                    <p className="card-text">Style  - {value.style}</p>
                                    <p className="card-text-2">Ounces - {value.ounces}</p>
                                    <button className="btn btn-primary" data-toggle="modal" onClick={() => this.openModelToSelectBeer(value)} data-target="#myModal">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        storeBeerData: state.beer.beerList
    }
}

function mapDispatchToProps(dispatch){
    return {
        successBeerdata: (beerData) => dispatch(ACTIONS.successBeerCall(beerData)),
        failureBeerdata: () => dispatch(ACTIONS.failureBeerCall())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultPage);
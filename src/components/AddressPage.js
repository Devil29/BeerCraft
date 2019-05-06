import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './css/AddressPage.scss';
import axios from 'axios'
import * as ACTIONS from '../store/actions/action';
import { connect } from 'react-redux';

class AddressPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayAddress: [],
            addAddress: {}
        }
    }

    getAddressData() {
        axios.get('https://vue-js-e14f0.firebaseio.com/data.json')
        .then (res => {
            console.log(res)
            let addressData = res.data;
            let result=[];
            console.log(addressData)
            Object.keys(addressData).forEach(function(key){
                addressData[key].id = key;
                result.push(addressData[key])
            });
            console.log(result);
            result = result.splice(0,5); //Taking first 200 rest to be handled by Pagination
            //this.setState({displayAddress: result[0].address});
            this.props.successUserdata(result[0]);
            this.setStoreDisplayAddress();
            // this.renderedAddressData();
        })
        .catch(error => {
            console.log(error)
            this.props.failureUserdata()});
    }

    setStoreDisplayAddress = () => {
        let user = this.props.getUserData;
        this.setState({displayAddress: user.address});
    }

    removeAddressData = e => {
        let user= this.props.getUserData;
        let addressId = e.target.id;
        console.log(addressId);
        user.address = user.address.filter( el => el.id !== parseInt(addressId));
        axios.put("https://vue-js-e14f0.firebaseio.com/data/" + user.id  + ".json", user)
        .then((res)=> {
            console.log("Success");
            this.props.successUserdata(res.data);
            this.setStoreDisplayAddress();
        })
        .catch((err) => {console.log(err)})
    }

    componentWillMount() {
        console.log('component will mount');
        let userData = this.props.getUserData;
        if(userData){
            this.setState({displayAddress: userData.address});
        } else {
            this.getAddressData();
        }
    }
    componentWillUnmount() {
        console.log('component will unmount');
    }

    render() {
        return (
            <div className="address-page">
                <div className="row">
                {this.state.displayAddress.map((value, index) => {
                    return <div className="col-md-4" key={index}>
                        <div className="card card-custom"> 
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{value.mobileNumber}</h6>
                                <p className="card-text">{value.addressLine1}, {value.addressLine2}, {value.city}, {value.state}, {value.pincode}</p>
                                <br></br>
                                <Link to={{pathname: "/add-address", state: {value}}} className="card-link">Edit Address</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-link" id={value.id} onClick={e=> this.removeAddressData(e)}>Remove Address</button>
                            </div>
                        </div>
                    </div>
                })}
                </div>
                <br></br>
                <div>
                    <Link to="/add-address"><button className="btn btn-primary">Add New Address</button></Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        getUserData: state.user.user
    }
}

function mapDispatchToProps(dispatch){
    return {
        successUserdata: (user) => dispatch(ACTIONS.successUserCall(user)),
        failureUserdata: () => dispatch(ACTIONS.failureUserCall())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressPage);
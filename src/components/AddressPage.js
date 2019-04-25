import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './css/AddressPage.scss';
import axios from 'axios'

class AddressPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayAddress: []
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
                result.push(addressData[key])
            });
            console.log(result);
            result = result.splice(0,5); //Taking first 200 rest to be handled by Pagination
            this.setState({displayAddress: result[0].address});
            this.renderedAddressData();
        })
        .catch(error => console.log(error))
    }

    componentWillMount() {
        console.log('component will mount');
            this.getAddressData(); //Call api and update data in store
    }
    componentWillUnmount() {
        console.log('component will unmount');
    }

    render() {
        return (
            <div className="address-page">
                <div className="row">
                {this.state.displayAddress.map((value, index) => {
                    return <div className="col-md-4">
                        <div className="card card-custom"> 
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{value.mobileNumber}</h6>
                                <p className="card-text">{value.addressLine1}, {value.addressLine2}, {value.city}, {value.state}, {value.mobileNumber}</p>
                                <br></br>
                                <Link to="/" className="card-link">Edit Address</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to="/" className="card-link">Remove Address</Link>
                            </div>
                        </div>
                        {/* <div className="card-body card-custom">
                            <p className="card-text">Flat number - {value.addressLine1}</p>
                            <p className="card-text">Street  - {value.addressLine2}</p>
                            <p className="card-text">City - {value.city}</p>
                            <p className="card-text">State - {value.state}</p>
                            <p className="card-text">Pincode - {value.pincode}</p>
                            <p className="card-text">Mobile number - {value.mobileNumber}</p>
                        </div> */}
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

export default AddressPage;
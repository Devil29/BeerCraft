import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class AddressPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressData: []
        }
    }
    render() {
        return (
            <div>
                <button><Link to="/add-address">Add Address</Link></button>
                <div className="row">
                {addressData().map((value, index) => {
                    return <div className="col-md-3">
                        <div className="card-body">
                            <p className="card-text">Flat number - {value.addressLine1}</p>
                            <p className="card-text">Street  - {value.addressLine2}</p>
                            <p className="card-text">City - {value.city}</p>
                            <p className="card-text">State - {value.state}</p>
                            <p className="card-text">Pincode - {value.pincode}</p>
                            <p className="card-text">Mobile number - {value.mobileNumber}</p>
                        </div>
                    </div>
                })}
                </div>
            </div>
        );
    }
}

function addressData() {
    let data = [{ "addressLine1": "12",
                "addressLine2": "sk",
                "city": "indirapuram",
                "state": "up",
                "pincode": 201014,
                "mobileNumber": 8769418092
            },
            { "addressLine1": "13",
                "addressLine2": "sk",
                "city": "indirapuram",
                "state": "up",
                "pincode": 201014,
                "mobileNumber": 8769418092
            },
            { "addressLine1": "14",
                "addressLine2": "sk",
                "city": "indirapuram",
                "state": "up",
                "pincode": 201014,
                "mobileNumber": 8769418092
            }];
    return data;
}

export default AddressPage;
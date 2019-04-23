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
            <div className="row">
                <button><Link to="/add-address">Add Address</Link></button>
                <ul>
                {addressData().map((value, index) => {
                    return <li key={index}>{value.addressLine1} {value.addressLine2} {value.city}</li>
                })}
                </ul>
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
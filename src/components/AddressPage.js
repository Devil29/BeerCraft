import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './css/AddressPage.scss';
class AddressPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressData: []
        }
    }

    render() {
        return (
            <div className="address-page">
                <div className="row">
                {addressData().map((value, index) => {
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

function addressData() {
    let data = [{ "addressLine1": "OLA, 4th Floor, Cherry Hills Embassy Golf Links",
                "addressLine2": "Domlur Bangalore",
                "title": "Office",
                "city": "BENGALURU",
                "state": "KARNATAKA",
                "pincode": 560071,
                "mobileNumber": 7896362237
            },
            { "addressLine1": "110A/27 Vyas apartment-A",
                "addressLine2": "sector-11 pratap nagar",
                "city": "JAIPUR",
                "title": "College",
                "state": "RAJSTHAN",
                "pincode": 302022,
                "mobileNumber": 8769418092
            },
            { "addressLine1": "F-F-4, Plot No-353",
                "addressLine2": "Shakti Khand-3, Indirapuram",
                "city": "Ghaziabad",
                "title": "Home",
                "state": "UTTAER PRADESH",
                "pincode": 201014,
                "mobileNumber": 8769418092
            }];
    return data;
}

export default AddressPage;
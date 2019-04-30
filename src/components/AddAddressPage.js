import React, {Component} from 'react'

class AddAddressPage extends Component {

    state = {
        address: {
            addressLine1: "",
            addressLine2: "",
            state: "",
            pincode: "",
            mobileNumber: "",
            title: ""
        },
        addressErrors: {
            addressLine1: null,
            addressLine2: null,
            state: null,
            pincode: null,
            mobileNumber: null,
            title: null
        }
    }

    ADDRESS_REGEX = {
        addressLine1: "^[a-zA-Z]+$",
        addressLine2: null,
        state: null,
        pincode: "^[0-9]+$",
        mobileNumber: "^[0-9]+$",
        title: null
    }

    change = e => {
        let address = this.state.address;
        let name = e.target.id;
        address[name] = e.target.value;
        this.setState({address})
    };

    onSubmit = e => {
        e.preventDefault();
        let address = this.state.address;
        let valid = true;
        Object.keys(address).forEach(key => {
            if(address[key]==""){
                valid=false;
            }
        });
        if(!valid){
            return alert("Invalid Inputs");
        }
        console.log(this.state.address);
    }

    blur = e => {
        let name = e.target.id;
        let value = e.target.value;
        let regex = new RegExp(this.ADDRESS_REGEX[name]);
        let addressErrors = this.state.addressErrors
        if(!regex.test(value)){
            addressErrors[name] = "Invalid " + name;
        } else {
            addressErrors[name] = null;
        }
        this.setState({addressErrors});

    }

    render() {
        return(
            <form className="form-group">
                <input
                    address="addressLine1"
                    id="addressLine1"
                    className="form-control"
                    placeholder="Address Line 1"
                    value={this.state.address.addressLine1}
                    onChange={e => this.change(e)}
                    onBlur={e => this.blur(e)}
                    type="text"
                    />
                <span color="red">{this.state.addressErrors.addressLine1}</span>
                    <br />
                <input
                    address="addressLine2"
                    id="addressLine2"
                    className="form-control"
                    placeholder="Address Line 2"
                    value={this.state.address.addressLine2}
                    onChange={e => this.change(e)}
                    onBlur={e => this.blur(e)}
                    type="text"
                    />
                <span color="red">{this.state.addressErrors.addressLine2}</span>
                    <br />
                <input
                    address="state"
                    id="state"
                    className="form-control"
                    placeholder="State"
                    value={this.state.address.state}
                    onChange={e => this.change(e)}
                    onBlur={e => this.blur(e)}
                    type="text"
                    />
                <span color="red">{this.state.addressErrors.state}</span>
                    <br />
                <input
                    address="pincode"
                    id="pincode"
                    className="form-control"
                    placeholder="Pincode"
                    value={this.state.address.pincode}
                    onChange={e => this.change(e)}
                    type="number"
                    onBlur={e => this.blur(e)}
                    maxLength="6"
                    />
                <span color="red">{this.state.addressErrors.pincode}</span>
                    <br />
                <input
                    address="mobileNumber"
                    id="mobileNumber"
                    className="form-control"
                    placeholder="Mobile Number"
                    value={this.state.address.mobileNumber}
                    onChange={e => this.change(e)}
                    maxLength="10"
                    onBlur={e => this.blur(e)}
                    type="number"
                    />
                <span color="red">{this.state.addressErrors.mobileNumber}</span>
                    <br />
                <input
                    address="title"
                    id="title"
                    className="form-control"
                    placeholder="Title"
                    value={this.state.address.title}
                    onChange={e => this.change(e)}
                    onBlur={e => this.blur(e)}
                    type="text"
                    />
                <span color="red">{this.state.addressErrors.title}</span>
                    <br />
                    <button className="btn btn-primary" onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        )
    }
}

export default AddAddressPage;
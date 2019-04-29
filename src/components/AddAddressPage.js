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
        }
    }

    change = e => {
        let address = this.state.address;
        let name = e.target.id;
        address[name] = e.target.value;
        this.setState({address})
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.address);
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
                    type="text"
                    />
                    <br />
                <input
                    address="addressLine2"
                    id="addressLine2"
                    className="form-control"
                    placeholder="Address Line 2"
                    value={this.state.address.addressLine2}
                    onChange={e => this.change(e)}
                    type="text"
                    />
                    <br />
                <input
                    address="state"
                    id="state"
                    className="form-control"
                    placeholder="State"
                    value={this.state.address.state}
                    onChange={e => this.change(e)}
                    type="text"
                    />
                    <br />
                <input
                    address="pincode"
                    id="pincode"
                    className="form-control"
                    placeholder="Pincode"
                    value={this.state.address.pincode}
                    onChange={e => this.change(e)}
                    type="number"
                    />
                    <br />
                <input
                    address="mobileNumber"
                    id="mobileNumber"
                    className="form-control"
                    placeholder="Mobile Number"
                    value={this.state.address.mobileNumber}
                    onChange={e => this.change(e)}
                    type="number"
                    />
                    <br />
                <input
                    address="title"
                    id="title"
                    className="form-control"
                    placeholder="Title"
                    value={this.state.address.title}
                    onChange={e => this.change(e)}
                    type="text"
                    />
                    <br />
                    <button className="btn btn-primary" onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
            // <div className="container">
            //     <form className="row">
            //         <label htmlFor="owner">Owner</label> 
            //         <input type="text" name="owner" id="owner" /><br></br>
            //         <label htmlFor="description">Description</label> 
            //         <input type="text" name="description" id="description" />
            //         <button>Add new cat</button>
            //         <input type="submit" value="Submit" /> 
            //     </form>
            // </div>
        )
    }
}

export default AddAddressPage;
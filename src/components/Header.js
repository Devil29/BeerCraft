import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';


function showLogin(){
    return(<li><Link to="/login"><span className=""></span>Login</Link></li>);
}

function showLogout(){
    return(<li><Link to="/logout"><span className=""></span>Logout</Link></li>);
}
class Header extends Component{
    render(){
        return (
            <div>
                <nav className="navbar navbar-default navbar-custom navbar-toggler">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="" >Beer Craft</Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/list">Search</Link></li>
                            <li><Link>Add</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                        <li><Link><span className=""></span>Cart</Link></li>
                        <li className="dropdown"><Link className="dropdown-toggle" data-toggle="dropdown">Profile <span className="caret"></span></Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/address">Address</Link></li>
                                <li><Link>Wallet</Link></li>
                            </ul>
                        </li>
                        { this.props.userData ? showLogout() :  showLogin()}
                        </ul>
                    </div>
                </nav>  
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        userData: state.user.user
    }
}

export default connect(mapStateToProps)(Header);
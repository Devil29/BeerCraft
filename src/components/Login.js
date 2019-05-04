import React, {Component} from 'react'
import './css/Login.scss'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                emailId: "",
                password: "",
                id: null
            },
            loginError: {
                emailId: null,
                password: null
            }
        }
    } 

    LOGIN_REGEX = {
        login: "^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,19}$",
        password: "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$"
    }

    change = e => {
        let login = this.state.login;
        let name = e.target.id;
        login[name] = e.target.value;
        this.setState({login})
    };

    blur = e => {
        let name = e.target.id;
        let value = e.target.value;
        let regex = new RegExp(this.LOGIN_REGEX[name]);
        let loginError = this.state.loginError
        if(!regex.test(value)){
            loginError[name] = "Invalid " + name;
        } else {
            loginError[name] = null;
        }
        this.setState({loginError});

    }

    onSubmit = e => {
        e.preventDefault();
        let login = this.state.login;
        let valid = true;
        Object.keys(login).forEach(key => {
            if(login[key] === ""){
                valid=false;
            }
        });
        if(!valid){
            return alert("Invalid Inputs");
        }
    }
    
    render() {
        return(<div class="login-page">
                <div class="wrapper">
                    <form class="form-signin">       
                        <h2 class="form-signin-heading">Please login</h2>
                        <input 
                            class="form-control" 
                            name="username" 
                            id="emailId"
                            placeholder="Email Address" 
                            value={this.state.login.emailId}
                            onChange={e => this.change(e)}
                            onBlur={e => this.blur(e)} 
                            type="text" 
                            />
                        <span color="red">{this.state.loginError.emailId}</span>
                        <br />
                        <input 
                            class="form-control" 
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={this.state.login.password}
                            onChange={e => this.change(e)}
                            onBlur={e => this.blur(e)}
                            type="password" 
                            />
                        <span color="red">{this.state.loginError.password}</span>
                        <br />
                        <label class="checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
                        </label>
                        <button class="btn btn-lg btn-primary btn-block" onClick={e => this.onSubmit(e)}>
                            Login
                        </button>   
                    </form>
                </div>
            </div>
            );
    }
}

export default Login;
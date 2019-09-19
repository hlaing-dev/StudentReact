import React, { Component } from 'react'

export class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            pass: ''
        }
        this.changeName = this.changeName.bind(this);
        this.changePass = this.changePass.bind(this);
    }

    navigate = () => {
        if (this.state.name === 'admin' && this.state.pass === 'admin') {
            this.props.history.push("/home");
        }
        else alert("Invalid Account!");
    }

    changeName(e) {
        this.setState({ name: e.target.value });
    }

    changePass(e) {
        this.setState({ pass: e.target.value });
    }

    render() {
        return (
            <div className="maindiv">
                <div className="login-form">
                    <form onSubmit={this.navigate} className="mt-60">
                        <label style={{ 'marginLeft': '-105px' }} htmlFor="name">Username</label><br />
                        <input onChange={this.changeName} style={{ 'marginBottom': '10px' }} id="name"></input><br />
                        <label style={{ 'marginLeft': '-105px' }} htmlFor="pass">Password</label><br />
                        <input onChange={this.changePass} id="pass"></input><br />
                        <button className="mt-40 login-btn" onChange={this.changePass} type="submit">Login</button>
                    </form>
                </div>+-
            </div>
        )
    }
}

export default Login

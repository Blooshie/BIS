import React, { Component, useState } from 'react';
import "./Login.css";
import "./Button.css";
import { admin } from '../json/adminInfo.json';

export interface LoginProps {

}

export interface LoginState {
    id: string;
    password: string;
}

class Login extends React.Component<LoginProps, LoginState> {

    state = { id: "", password: "" }

    render() {
        return (
            <div className="box">
                <div id="boxLogo">Login</div>
                <div>
                    <label htmlFor="ID">ID</label>
                    <input name="ID" type="text" className="inputBox" value={this.state.id} onChange={e => this.updateID(e)} />
                </div>
                <div>
                    <label htmlFor="pwd">Password</label>
                    <input name="password" type="password" className="inputBox" value={this.state.password} onChange={e => this.updatePassword(e)} />
                </div>
                <button id="btn" onClick={this.submitClick.bind(this, this.state.id, this.state.password)}>Submit</button>
            </div>
        );
    }

    updateID(e: any) {
        this.setState({
            id: e.target.value
        });
    }

    updatePassword(e: any) {
        this.setState({
            password: e.target.value
        });
    }

    submitClick(_ID: string, _password: string) {
        if (_ID == admin.id && _password == admin.password) {
            alert("Uspjesno prijavljen!");
        }
    }
}

export default Login;
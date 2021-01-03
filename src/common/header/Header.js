import React, { Component } from 'react';
import "./Header.css"
import Button from '@material-ui/core/Button';
import "./Header.css";
import logo from "../../assets/logo.svg";


class Header extends Component {

    render() {

        return (
            <div>
                <header class='app-header'>
                    <img src={logo} className="app-logo" alt="logo"></img>
                    <div class='login-button'>
                        <Button variant="contained" color="default">Log In</Button>
                    </div>
                </header>

            </div>


        )
    }
}

export default Header;
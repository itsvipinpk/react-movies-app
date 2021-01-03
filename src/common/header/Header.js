import React, { Component } from 'react';
import "./Header.css"
import Button from '@material-ui/core/Button';
import "./Header.css";
import logo from "../../assets/logo.svg";
import Modal from "react-modal";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class Header extends Component {

    constructor() {

        super();
        this.state = {
            modalIsOpen: false,
            value : 0

        };
    }

    openModalHandler = () => {
        this.setState({ modalIsOpen: true })

    }

    closeModalHandler = () => {
        this.setState({ modalIsOpen: false })
    }

    onChangeHandler = (event, value) => {
            this.setState({value});

    }
    render() {

        return (
            <div>
                <header className='app-header'>
                    <img src={logo} className="app-logo" alt="logo"></img>
                    <div className='login-button'>
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>Log In</Button>
                    </div>
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login"
                    onRequestClose={this.closeModalHandler}>
                    <Tabs value={this.state.value} onChange ={this.onChangeHandler}>
                        <Tab label="Login"></Tab>
                        <Tab label="Register" ></Tab>
                    </Tabs>
                </Modal>

            </div>


        )
    }
}

export default Header;
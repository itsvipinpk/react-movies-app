import React, { Component } from 'react';
import ReactDom from 'react-dom';
import "./Header.css"
import Button from '@material-ui/core/Button';
import "./Header.css";
import logo from "../../assets/logo.svg";
import Modal from "react-modal";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TableContainer } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import BookShow from "../../screens/bookshow/BookShow";


const TabContainer = function (props) {

    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center'}}>
            {props.children}
        </Typography>
    );
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}
class Header extends Component {

    constructor() {

        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            username:"",
            usernameRequired:"dispNone",
            passwordRequired: "dispNone",
            password: "",
            firstname:"",
            firstnameRequired:"dispNone",
            lastname:"",
            lastnameRequired:"dispNone",
            email:"",
            emailRequired:"dispNone",
            regpassword:"",
            regpasswordRequired:"dispNone",
            contactnumber:"",
            contactnumberRequired:"dispNone"


        };
    }

    openModalHandler = () => {
    
        this.setState({
            modalIsOpen: true,
            value: 0,
            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: "",
            firstname:"",
            firstnameRequired:"dispNone",
            lastname:"",
            lastnameRequired:"dispNone",
            email:"",
            emailRequired:"dispNone",
            regpassword:"",
            regpasswordRequired:"dispNone",
            contactnumber:"",
            contactnumberRequired:"dispNone"
        });
    }


    closeModalHandler = () => {
        this.setState({ modalIsOpen: false })
    }

    onChangeHandler = (event, value) => {
        this.setState({ value });

    }
    loginClickHandler = () => {

        this.state.username === "" ? this.setState({usernameRequired:"dispBlock"}) : this.setState({usernameRequired:"dispNone"});
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
    }
    registerClickHandler = () => {

        this.state.firstname === "" ? this.setState({firstnameRequired:"dispBlock"}) : this.setState({firstnameRequired:"dispNone"});
        this.state.lastname === "" ? this.setState({lastnameRequired:"dispBlock"}) : this.setState({lastnameRequired:"dispNone"});
        this.state.email === "" ? this.setState({emailRequired:"dispBlock"}) : this.setState({emailRequired:"dispNone"});
        this.state.regpassword === "" ? this.setState({regpasswordRequired:"dispBlock"}) : this.setState({regpasswordRequired:"dispNone"});
        this.state.contactnumber === "" ? this.setState({contactnumberRequired:"dispBlock"}) : this.setState({contactnumberRequired:"dispNone"});
    }


    inputUsernameChangeHandler = (e) => {
        this.setState({username  : e.target.value   });
    }

    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    inputFirstnameChangeHandler = (e) => {
        this.setState({firstname  : e.target.value   });
    }
    inputLastnameChangeHandler = (e) => {
        this.setState({lastname  : e.target.value   });
    }
    inputEmailChangeHandler = (e) => {
        this.setState({email  : e.target.value   });
    }
    inputRegPasswordChangeHandler = (e) => {
        this.setState({regpassword  : e.target.value   });
    }
    inputContactNumberChangeHandler = (e) => {
        this.setState({contactnumber  : e.target.value   });
    }
    bookshowHandler = () => {

        ReactDom.render(<BookShow />, document.getElementById('root'));
    }

    render() {

        return (
            <div>
                <header className='app-header'>
                    <img src={logo} className="app-logo" alt="logo"></img>
                    <div className='login-button'>
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>Log In</Button>
                    </div>
                    {
                        this.props.showBookShowButton === "true" ?
                    
                    <div className="bookshow-button">
                        <Button variant="contained" color="primary" onClick={this.bookshowHandler}>BOOK SHOW</Button>
                    </div> : ""
                    }
                </header>
                <Modal className="container-modal" ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login"
                    onRequestClose={this.closeModalHandler}>
                    <Tabs className="tabs" value={this.state.value} onChange={this.onChangeHandler}>
                        <Tab label="Login"></Tab>
                        <Tab label="Register" ></Tab>
                    </Tabs>
                    {this.state.value ===0 && 
                    <TabContainer className="cont-tabs">
                        <FormControl required>
                            <InputLabel htmlFor='username'>userName</InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler}></Input>
                            <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor='password'>passWord</InputLabel>
                            <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                        </FormControl><br/><br/>
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                    </TabContainer>}
                    {this.state.value === 1 && 
                    <TabContainer className="cont-tabs">
                        <FormControl required>
                            <InputLabel htmlFor='firstname'>firstName</InputLabel>
                            <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstnameChangeHandler}></Input>
                            <FormHelperText className={this.state.firstnameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor='lastname'>lastName</InputLabel>
                            <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastnameChangeHandler}></Input>
                            <FormHelperText className={this.state.lastnameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor='email'>email</InputLabel>
                            <Input id="email" type="text" email={this.state.email} onChange={this.inputEmailChangeHandler}></Input>
                            <FormHelperText className={this.state.emailRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor='regpassword'>passWord</InputLabel>
                            <Input id="password" type="password" regpassword={this.state.regpassword} onChange={this.inputRegPasswordChangeHandler} />
                                <FormHelperText className={this.state.regpasswordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor='contactnumber'>contactnumber</InputLabel>
                            <Input id="contactnumber" type="text" password={this.state.contactnumber} onChange={this.inputContactNumberChangeHandler} />
                                <FormHelperText className={this.state.contactnumberRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                        </FormControl><br/><br/>
                        <Button variant="contained" color="primary" onClick={this.registerClickHandler}>REGISTER</Button>
                    </TabContainer>}
                </Modal>

            </div>


        )
    }
}

export default Header;
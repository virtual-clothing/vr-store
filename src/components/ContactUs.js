import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';

class ContactUs extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }

    }

    handleChange(obj) {

        this.setState(obj);
        console.log(this.state)

    }


    sendEmail() {
        const { name, email, subject, message } = this.state

        axios.post('/email', { name: name, email: email, subject: subject, message: message }).then(this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        }))

        this.props.cancel()
    }

    render() {

        if (this.props.isOpen === false) {
            return null

        } else {

            return (
                <Background>
                    <Modal>
                        <Input placeholder='name' onChange={(e) => this.handleChange({ name: e.target.value })} />
                        <Input placeholder='email' onChange={(e) => this.handleChange({ email: e.target.value })} />
                        <Input placeholder='Subject' onChange={(e) => this.handleChange({ subject: e.target.value })} />
                        <TextArea placeholder='What can we help you with?' onChange={(e) => this.handleChange({ message: e.target.value })} />
                        <ButtonDiv>
                            <button onClick={this.props.cancel()}>Cancel</button>
                            <button onClick={() => {
                                this.sendEmail();
                                this.props.cancel();
                            }}>Send</button>
                        </ButtonDiv>
                    </Modal>
                </Background>
            )
        }

    }

}

const Background = styled.div`
    align-items: center;
    background: rgba(0,0,0,.8);
    display: flex;
    height: 100%;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    `

const Modal = styled.div`
    align-items: center;
    background-color: white;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: flex-start;
    padding: 10px;
    position: fixed;
    width: 50%;
    z-index: 99;
    `

const Input = styled.input`
    margin: 5px;
    width: 100%;
    `

const TextArea = styled.textarea`
    height: 60%;
    margin: 10px;
    width: 100%;
    `

const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    `

function mapStateToProps(state) {
    return {
        user: state.userInfo
    }
}

export default connect(mapStateToProps)(ContactUs)
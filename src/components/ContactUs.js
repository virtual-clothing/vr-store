import React, { Component } from 'react';
import styled from 'styled-components';

class ContactUs extends Component {

    state = {
        name: '',
        subject: '',
        message: ''
    }

    handleChange(obj) {



    }

    render() {

        const Background = styled.div`
            position: fixed;
            top: 0;
            background-color: black;
            opacity: 0.5;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        `

        const Modal = styled.div`
            background-color: white;
            border: 2px solid black;
            width: 50%;
            height: 50%;
            z-index: 200;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            position: fixed;
            padding: 10px;
        `
        const Input = styled.input`
            width: 100%;
            margin: 10px;
        `

        const TextArea = styled.textarea`
            width: 100%;
            margin: 10px;
        `

        if (this.props.isOpen === false) {
            return null

        } else {

            return (
                <Background>
                    <Modal>
                        <Input placeholder='Name' />
                        <Input placeholder='Subject' />
                        <TextArea placeholder='What can we help you with?' />
                        <div>
                            <button onClick={this.props.cancel()}>Cancel</button>
                            <button>Send</button>
                        </div>
                    </Modal>
                </Background>
            )
        }

    }

}


export default ContactUs;
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
                <Modal>
                    <Input placeholder='Name'/>
                    <Input placeholder='Subject'/>
                    <TextArea placeholder='What can we help you with?'/>
                    <div>
                        <button onClick={this.props.cancel()}>Cancel</button>
                        <button>Send</button>
                    </div>
                </Modal>
            )
        }

    }

}


export default ContactUs;
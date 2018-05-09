import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class ContactUs extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    handleChange(obj) {

        this.setState(obj);

    }

    render() {

        const Background = styled.div`
            position: fixed;
            top: 0;
            background-color: rgba(0, 0, 0, .8);
            opacity: 0.5;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        `

        const Modal = styled.div`
            opacity: 1.0;
            background-color: rgba(255, 255, 255, 1);
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
            margin: 5px;
        `

        const TextArea = styled.textarea`
            height: 60%;
            width: 100%;
            margin: 10px;
        `

        const ButtonDiv = styled.div`
            width: 100%;
            display: flex;
            justify-content: space-around;
        `
        const Header = styled.div`
            width: 100%;
            height: 10%;
            background-color: black;
            font-color: white;
        `

        if (this.props.isOpen === false) {
            return null

        } else {

            return (
                <Background>
                    <Modal>
                        <Input placeholder={this.props.user.nickname} onChange={(e) => this.handleChange({ name: e.target.value })} />
                        <Input placeholder={this.props.user.email} onChange={(e) => this.handleChange({ email: e.target.value })} />
                        <Input placeholder='Subject' onChange={(e) => this.handleChange({ subject: e.target.value })} />
                        <TextArea placeholder='What can we help you with?' onChange={(e) => this.handleChange({ message: e.target.value })} />
                        <ButtonDiv>
                            <button onClick={this.props.cancel()}>Cancel</button>
                            <button>Send</button>
                        </ButtonDiv>
                    </Modal>
                </Background>
            )
        }

    }

}

function mapStateToProps(state) {
    return {
        user: state.userInfo
    }
}

export default connect(mapStateToProps)(ContactUs)
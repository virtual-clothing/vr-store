import React, { Component } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';
import axios from 'axios';
// const socket = io('http://localhost:4444');
// const socket = io('http://localhost:4444?botmasterUserId=6');


const ChatRoom = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 50%;;
  height: 19.2rem;
  box-sizing: border-box;
  background-color: white;
  opacity: 9;
  color: black;
  font-weight: bold;
  font-style: italic;
  padding: 3px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  padding-bottom: 0;

  @media (min-width: 450px) {
    width: 300px;
    margin-bottom: 5vh;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 17rem;
  margin-top: 0;
  top: 0;
  overflow: auto;
  box-sizing: border-box;
  padding: 0.5rem;


`;

const Messages = styled.div`
  background: grey;
  box-sizing: border-box;
  width: 30%;
  border-radius: 5px;
  width: 70%;
  font-weight: 400;
  font-size: 1rem;
  padding: 3px;
  border: 0;
  outline: none;
  word-break: break-all;
`;

const ChatFooter = styled.div`
  position: absolute;
  flex-direction: column;
  background: red;
  bottom: 0;
  width: 100%;
  height: 10%;
  box-sizing: border-box;

`;

const Input = styled.input`
  width: 70%;
  height: 100%;
  outline: 0px;
  border-width: 0px;
  resize: none;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  font-size: 12px;
  padding: 10px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 27%;
  height: 100%;
  border: none;
  background-color: white;
  font-size: 0.6rem;

`;

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: ['hello'],
      newMessage: '',
    };
  }

  sendMessage() {
    console.log(this.state.newMessage)
    axios.post('/api/message', {input: this.state.newMessage, context: 'fdsff'});
  }

  handleChange(newMessage) {
    this.setState({ newMessage });
  }

  render() {
    const chat = this.state.chat.map((e, i) => <p key={i}>{e}</p>);
    return (
      <ChatRoom>
        <Header>
          <Messages>
            {chat}
          </Messages>
        </Header>
        <ChatFooter>
          <Input
            type="text"
            value={this.state.newMessage}
            onChange={e => {
              this.handleChange(e.target.value);
            }} />
          <Button
            onClick={() => {
              this.sendMessage(this.state.newMessage);
            }}
          >
            Send
          </Button>
        </ChatFooter>
      </ChatRoom>
    );
  }
}

export default Chat;
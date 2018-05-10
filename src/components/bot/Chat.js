import React, { Component } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';
const socket = io('http://localhost:4444');

const ChatRoom = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 3.7vh;
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
`;

const Header = styled.div`
  background: green;
  padding: 5px;
`;

const Messages = styled.div`
  background: grey;
`;

const ChatFooter = styled.div`
  margin-top: 12vh;
  background: blue
`;

const Input = styled.input`
  width: 90%
`;

const Button = styled.button`
  width: 8%

`;




class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: ['hello', 'hi there'],
      newMessage: '',
    };

    socket.on('generate response', data => {
      const chat = [...this.state.chat, data];
      this.setState({ chat });
    });
  }

  sendMessage(message, type) {
    console.log('message', message);
    socket.emit(`${type} message`, message);
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
            this.sendMessage(this.state.newMessage, 'emit');
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
import React, { Component } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';
const socket = io('http://localhost:4444');

const ChatRoom = styled.div`

`

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
        <div>
        {chat}

          <label>New Message</label>
          <input
            type="text"
            value={this.state.newMessage}
            onChange={e => {
              this.handleChange(e.target.value);
            }}
          />
          <button
            onClick={() => {
              this.sendMessage(this.state.newMessage, 'emit');
            }}
          >
            Emit
          </button>
        </div>
      </ChatRoom>
    );
  }
}

export default Chat;
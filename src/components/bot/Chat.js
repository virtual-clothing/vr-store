import React, { Component } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';

const socket = io('http://localhost:4444');
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
margin: 0;
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

const Ul = styled.ul`
padding: 0;
`

const Li = styled.li`
  list-style: none;
  border-radius: 10px;

  &:nth-child(even) {
    text-align: right;
    width: 70%;
    float: right;
    margin-bottom: 9px;
    background-color: #1db954;
    color: white;
    padding-right: 8px;
    box-sizing: border-box;
  }

  &:nth-child(odd) {
    text-align: left;
    width: 70%;
    float: left;
    margin-bottom: 9px;
    background-color: #efeeee;
    padding-left: 8px;
    box-sizing: border-box;
  }

`

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [],
      newMessage: '',
    };

    socket.on('generate response', data => {
      const chat = [...this.state.chat, data];
      this.setState({ chat });
    });
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  sendMessage(message, type) {
    let chat = [...this.state.chat, this.state.newMessage];
    this.setState({chat})
    console.log('message', message);
    socket.emit(`${type} message`, message);
  }

  handleChange(newMessage) {
    this.setState({ newMessage });
  }

  handleKeyPress (e) {
    if(e.which === 13){
      this.setState({newMessage: e.target.value}, () => {
        this.sendMessage(this.state.newMessage, 'emit');
      })

      e.target.value = '';
    }
  }

  render() {
    const chat = this.state.chat.map((e, i) => <Li key={i}>{e}</Li>);
    return (
      <ChatRoom style={{display: this.props.toggle}}>
        <Header>
          <Ul>
            {chat}
            <div style={{ float:"left", clear: "both" }}
              ref={(el) => { this.messagesEnd = el; }}>
            </div>
          </Ul>
        </Header>
        <ChatFooter>
          <Input
            placeholder="Type here..."
            type="text"
            onKeyPress={(e) => this.handleKeyPress(e)}
            />
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
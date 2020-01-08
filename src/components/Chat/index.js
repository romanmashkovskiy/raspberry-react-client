import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { sendMessage, startTyping, stopTyping } from '../../store/chat/actions';
import Typography from '@material-ui/core/Typography';

const ChatWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const MainBlock = styled.div`
    display: flex;
    width: 100%;
    height: calc(100% - 60px);
`;

const UsersWrapper = styled.div`
    width: 20%;
    min-height: 100%;
    overflow-y: auto;
    border-right: 1px solid black;
`;

const MessagesWrapper = styled.div`
    width: 80%;
    min-height: 100%;
    overflow-y: auto;
`;

const InputWrapper = styled.div`
    background: black; 
    padding: 3px 3px 10px; 
    position: fixed; 
    bottom: 0; 
    width: 100%;
    height: 60px;
    display: flex;
`;

const Input = styled.input`
    border: 0; 
    padding: 10px; 
    width: 90%; 
    height: 100%;
    margin: 0 0.5%;
`;

const Button = styled.button`
    width: 9%; 
    height: 100%;
    background: rgb(130, 224, 255); 
    border: none; 
    padding: 10px;
`;

let timeout;

const Chat = ({
                  user,
                  status,
                  sendMessage,
                  startTyping,
                  stopTyping,
                  connectedUsers,
                  messages,
                  isTyping,
                  typingUsers
              }) => {
    const [message, setMessage] = useState('');

    return (
        <ChatWrapper>
            <MainBlock>
                <UsersWrapper>
                    <Typography variant='h6' gutterBottom align='center'>
                        Connected users
                    </Typography>
                    <ul>
                        { connectedUsers.map(user => (
                            <li key={ user }>
                                { user }
                            </li>
                        )) }
                    </ul>
                </UsersWrapper>
                <MessagesWrapper>
                    <Typography variant='h6' gutterBottom align='center'>
                        Messages
                    </Typography>
                    <ul>
                        { messages.map((message, index) => (
                            <li key={ message.userId + index }>
                                <span>{ message.userId }:   </span>
                                <span>{ message.content }</span>
                            </li>
                        )) }
                    </ul>
                    { typingUsers.length > 0 && (
                        <div>
                            { `${ typingUsers.join(', ') } ${ typingUsers.length === 1 ? 'is typing' : 'are typing'}` }
                        </div>
                    ) }
                </MessagesWrapper>
            </MainBlock>
            <InputWrapper>
                <Input
                    type='text'
                    value={ message }
                    onChange={ e => {
                        if (!isTyping) {
                            startTyping(user.id);
                            timeout = setTimeout(() => stopTyping(user.id), 2000);
                        } else {
                            clearTimeout(timeout);
                            timeout = setTimeout(() => stopTyping(user.id), 2000);
                        }

                        setMessage(e.target.value);
                    } }
                    placeholder='Type your message here'
                />
                <Button onClick={ () => {
                    sendMessage(user.id, message);
                    setMessage('');
                } }>
                    Send
                </Button>
            </InputWrapper>
        </ChatWrapper>
    )
};

const mapStateToProps = ({ auth: { user }, chat: { connectedUsers, messages, isTyping, typingUsers } }) => ({
    user,
    connectedUsers,
    messages,
    isTyping,
    typingUsers
});

const mapDispatchToProps = { sendMessage, startTyping, stopTyping };

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
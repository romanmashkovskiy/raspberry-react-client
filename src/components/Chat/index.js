import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { sendMessage } from '../../store/chat/actions';

const ChatWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const MessagesWrapper = styled.div`
    width: 100%;
    min-height: calc(100% - 60px);
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

const StatusContainer = styled.div`
    width: 19%; 
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StatusText = styled.p`
    margin: 0;
`;

const Input = styled.input`
    border: 0; 
    padding: 10px; 
    width: 70%; 
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


const Chat = ({ user, status, sendMessage, messages }) => {
    const [message, setMessage] = useState('');

    return (
        <ChatWrapper>
            <MessagesWrapper>
                <ul>
                    { messages.map((message, index) => (
                        <li key={ message.userId + index }>
                            <span>{ message.userId }   </span>
                            <span>{ message.content }</span>
                        </li>
                    )) }
                </ul>
            </MessagesWrapper>
            <InputWrapper>
                <StatusContainer>
                    <StatusText>Connection status:</StatusText>
                    <StatusText>{ status }</StatusText>
                </StatusContainer>
                <Input
                    type='text'
                    value={ message }
                    onChange={ e => setMessage(e.target.value) }
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

const mapStateToProps = ({ auth: { user }, chat: { status, messages } }) => ({
    user,
    status,
    messages
});

const mapDispatchToProps = { sendMessage };

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
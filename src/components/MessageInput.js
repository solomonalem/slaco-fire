import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { db } from '../firebase';
import firebase from 'firebase';

const MessageInput = ({ channelName, channelId, chatRef}) => {
	const [input, setInput] = useState('');
	const sendMessage = e => {
		e.preventDefault();

		if (!channelId) {
			return false;
		}
		db.collection('rooms').doc(channelId).collection('message').add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		chatRef.current.scrollIntoView({
			behavior: 'smooth',
		});
		setInput('');
	};

	return (
		<MessageInputContainer>
			<form>
				<input
					onChange={e => setInput(e.target.value)}
					value={input}
					placeholder={`Message # ${channelName}`}
				/>
				<Button hidden type='submit' onClick={sendMessage}>
					Send
				</Button>
			</form>
		</MessageInputContainer>
	);
};

export default MessageInput;

const MessageInputContainer = styled.div`
	border-radius: 20px;
	> form {
		position: relative;
		display: flex;
		justify-content: center;
	}
	> form > input {
		position: fixed;
		bottom: 30px;
		width: 70%;
		border: 1px solid gray;
		border-radius: 4px;
		padding: 21px;
		outline: none;
	}

	> form > button {
		display: none !important;
	}
`;

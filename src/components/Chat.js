import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import SingleMessage from './SingleMessage';

import MessageInput from './MessageInput';

const Chat = () => {
	const chatRef = useRef(null);
	const roomId = useSelector(selectRoomId);

	const [roomDetails] = useDocument(
		roomId && db.collection('rooms').doc(roomId),
	);
	const [roomMessages, loading] = useCollection(
		roomId &&
			db
				.collection('rooms')
				.doc(roomId)
				.collection('message')
				.orderBy('timestamp', 'asc'),
	);

	useEffect(() => {
		chatRef?.current?.scrollIntoView({
			behavior: 'smooth',
		});
	}, [roomId, loading]);

	return (
		<>
			<ChatContainer>
			{roomDetails && roomMessages && (
				<>
				<HeaderSection>
					<HeaderLeft>
						<h4>
							<strong># {roomDetails?.data().name}</strong>
							<StarBorderOutlinedIcon />
						</h4>
					</HeaderLeft>
					<HeaderRight>
						<p>
							<InfoOutlinedIcon /> Details
						</p>
					</HeaderRight>
				</HeaderSection>

				<MessageArea>
					{roomMessages?.docs.map(doc => {
						const { message, timestamp, user, userImage } = doc.data();
						return (
							<SingleMessage
								key={doc.id}
								message={message}
								timestamp={timestamp}
								user={user}
								userImage={userImage}
							/>
						);
					})}

					<MessageBottom ref={chatRef} />
				</MessageArea>

				<MessageInput
					chatRef={chatRef}
					channelName={roomDetails?.data().name}
					channelId={roomId}
				/>
				</>
				)}
			
			</ChatContainer>
		</>
	);
};

export default Chat;

const ChatContainer = styled.div`
	flex: 0.7;
	flex-grow: 1;
	overflow-y: scroll;
	margin-top: 64px;
`;
const HeaderSection = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
	border-bottom: 1px solid lightgray;
`;
const HeaderRight = styled.div`
	> p {
		display: flex;
		align-items: center;
	}
	> p > .MuiSvgIcon-root {
		font-size: 1rem;
		margin-left: 10px;
		margin-right: 10px;
	}
`;

const HeaderLeft = styled.div`
	display: flex;
	align-items: center;
	> h4 {
		display: flex;
		text-transform: lowercase;
		align-items: center;
	}
	> h4 > .MuiSvgIcon-root {
		font-size: 1.1rem;
		margin-left: 10px;
	}
`;

const MessageArea = styled.div``;
const MessageBottom = styled.div`
	padding: 20px;
`;

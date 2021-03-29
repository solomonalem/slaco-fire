import React from 'react';
import styled from 'styled-components';

const SingleMessage = ({ message, timestamp, user, userImage }) => {
	return (
		<SingleMessageContainer>
			<img src={userImage} alt='' />
			<MessageInfo>
				<h4>{user} </h4>
				<span>{new Date(timestamp?.toUTCString())}</span>
			</MessageInfo>
		</SingleMessageContainer>
	);
};

export default SingleMessage;

const SingleMessageContainer = styled.div`
display:flex;
align-items:center;
padding:20px;

> img{
    height:48px;
    border-radius:8px;
}
`;
const MessageInfo = styled.div`
color:gray;
font-weight:300;
margin-left:4px;
font-size:10px;

`;

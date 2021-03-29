import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Avatar } from '@material-ui/core';

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderLeftSection>
				<HeaderAvatarIcon />
				<AccessTimeIcon />
			</HeaderLeftSection>
			<HeaderSearchSection>
				<SearchIcon />
				<input placeholder='Search' />
			</HeaderSearchSection>
			<HeaderRightSection>
				<HelpOutlineIcon />
			</HeaderRightSection>
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0;
	background: var(--slaco-color);
	color: white;
`;

const HeaderLeftSection = styled.div`
	flex: 0.3;
	display: flex;
	align-items: center;
	margin-left: 19px;
	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 30px;
	}
`;
const HeaderRightSection = styled.div`
	flex: 0.3;
	display: flex;
	align-items: flex-end;
	margin-left: 19px;
	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 20px;
	}
`;

const HeaderAvatarIcon = styled(Avatar)`
	cursor: pointer;
	:hover {
		opacity: 0.7;
	}
`;

const HeaderSearchSection = styled.div`
	flex: 0.4;
	opacity: 1;
	border-radius: 9px;
	text-align: center;
	display: flex;
	padding: 0 50px;
	background-color: var(--color-blue-2);

	/* border: 1px white solid; */

	> input {
		background-color: transparent;
		text-align: center;
		min-width: 30vw;
		outline: none;
		color: white;
		padding: 5px;
        border:none;
	}
`;

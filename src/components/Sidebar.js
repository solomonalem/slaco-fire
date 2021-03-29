import React from 'react';
import styled from 'styled-components';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

const Sidebar = () => {
	const [channels, loading, error] = useCollection(db.collection('rooms'));

	return (
		<SidebarContainer>
			<SidebarHead>
				<SidebarInfo>
					<h2>UC-Berkely</h2>
					<h3>
						<FiberManualRecordIcon />
						this is it
					</h3>
				</SidebarInfo>
				<CreateIcon />
			</SidebarHead>
			<hr></hr>

			<SidebarOption Icon={InsertCommentIcon} title='Threads' />
			<SidebarOption Icon={InboxIcon} title='Mentions & reactions' />
			<SidebarOption Icon={DraftsIcon} title='Saved items' />
			<SidebarOption Icon={BookmarkBorderIcon} title='Channel browser' />
			<SidebarOption Icon={PeopleAltIcon} title='People & user groups' />
			<SidebarOption Icon={AppsIcon} title='Apps' />
			<SidebarOption Icon={FileCopyIcon} title='File browser' />
			<SidebarOption Icon={ExpandLessIcon} title='Show Less' />

			<hr></hr>
			<SidebarOption Icon={ExpandMoreIcon} title='Channels' />
			<hr></hr>
			<SidebarOption Icon={AddIcon} addChannelOption title='Add Channel' />
			{channels?.docs.map(doc => (
				<SidebarOption
					key={doc.id}
					id={doc.id}
					title={doc.data().name}
				/>
			))}
		</SidebarContainer>
	);
};

export default Sidebar;

const SidebarContainer = styled.div`
	flex: 0.3;
	margin-top: 60px;
	background-color: var(--color-bg);
	max-width: 260px;
	color: white;

	> hr {
		margin-top: 0.6rem;
		margin-bottom: 0.7rem;
		border: 1px solid var(--color-blue-3);
	}
`;
const SidebarHead = styled.div`
	display: flex;
	border-bottom: 10px;
	padding: 13px;
	> .MuiSvgIcon-root {
		padding: 8px;
		color: var(--color-blue-2);
		font-size: 1.1.rem;
		background-color: white;
		border-radius: 50%;
		margin-left: 19px;
	}
`;
const SidebarInfo = styled.div`
	flex: 1;
	> h2 {
		font-size: 1rem;
		font-weight: bold;
		margin-bottom: 0.3rem;
	}
	> h3 {
		display: flex;
		font-size: 0.9rem;
		font-weight: 400;
		align-items: center;
	}
	> h3 > .MuiSvgIcon-root {
		font-size: 0.9rem;
		margin-top: 0.1px;
		margin-right: 2px;
		color: #2bf838;
	}
`;

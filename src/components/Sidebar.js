import React from 'react';
import styled from 'styled-components';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Sidebar = () => {
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
			</SidebarHead>
		</SidebarContainer>
	);
};

export default Sidebar;

const SidebarContainer = styled.div`
	flex: 0.3;
	margin-top: 62px;
	background-color: var(--color-blue-1);
	max-width: 260px;
	color: white;
`;
const SidebarHead = styled.div``;
const SidebarInfo = styled.div``;

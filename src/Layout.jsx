import React from 'react';
import UserInput from './UserInput';
import DesiredOutput from './DesiredOutput';
import Instructions from './Instructions';

const Layout =({shape,update,level,snapped}) => {
		return(
			<div>
			<Instructions/>
			<div className='drawHolder'>
				<div className = 'objectHolder'>
					<UserInput shape={shape} level={level} update={update} snapped={snapped}/>
				</div>
				<div className = 'objectHolder'>
					<DesiredOutput shape={shape} level={level} update={update} snapped={snapped}/>
				</div>
			</div>
			</div>
			);
	}

export default Layout;
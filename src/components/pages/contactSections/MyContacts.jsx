import React from 'react';
import scss from './MyContacts.module.scss';

const MyContacts = () => {
	return (
		<>
			<section className={scss.MyContacts}>
				<div className="container">
					<div className={scss.content}>
						<h3>MyContacts</h3>
					</div>
				</div>
			</section>
		</>
	);
};
export default MyContacts;

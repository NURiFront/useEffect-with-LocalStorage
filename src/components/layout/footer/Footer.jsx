import React from 'react';
import scss from './Footer.module.scss';

const Footer = () => {
	return (
		<>
			<footer className={scss.Footer}>
				<div className="container">
					<div className={scss.content}>
						<h3>Footer</h3>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;

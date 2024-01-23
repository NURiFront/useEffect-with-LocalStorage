import React from 'react';
import scss from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
	const links = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'About',
			href: '/about'
		},
		{
			label: 'Contact',
			href: '/contact'
		}
	];
	return (
		<>
			<header className={scss.Header}>
				<div className="container">
					<div className={scss.content}>
						<nav>
							<ul>
								{links.map((item, index) => (
									<li key={index}>
										<Link to={item.href}>{item.label}</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
};
export default Header;

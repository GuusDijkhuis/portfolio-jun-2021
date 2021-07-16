import React from 'react';

import classes from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={classes.Nav}>
			<ul>
				<li>
					<a href="#about-me">Over mij</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
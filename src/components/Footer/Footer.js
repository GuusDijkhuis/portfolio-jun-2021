import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={classes.Footer} id="contact">
			<div className={classes.Content}>
				<h1>Contact</h1>
				<ul>
					<li>
						<span>Tel:</span>
						<a href="tel:0653682783">06-53682783</a>
					</li>
					<li>
						<span>E-mail:</span>
						<a href="mailto:guus.dijkhuis@gmail.com">guus.dijkhuis@gmail.com</a>
					</li>
					<li>
						<span>GitHub:</span>
						<a href="https://github.com/GuusDijkhuis">https://github.com/GuusDijkhuis</a>
					</li>
					<li>
						<span>LinkedIn:</span>
						<a href="https://www.linkedin.com/in/guus-dijkhuis/">https://www.linkedin.com/in/guus-dijkhuis/</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
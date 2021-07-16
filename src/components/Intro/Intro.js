import React from 'react';

import classes from './Intro.module.css';

const Intro = () => {
	return (
		<div className={classes.Intro} id="about-me">
			<div className={classes.Content}>
				<h1>Guus Dijkhuis</h1>
				<p>Ik ben Guus Dijkhuis en doe de studie Communication and Multimedia Design. Op deze opleiding ben je voornamelijk bezig met Visual-design, UX-design en Frontend Development. Aangezien ik tijdens mijn studie en stages voornamelijk bezig ben geweest met het maken van websites door middel van code ben ik tot de conclusie gekomen dat ik een echte Frontend Developer ben. </p>
			</div>
			<div className={classes.Image}>
				<img src={`${process.env.PUBLIC_URL}/me.png`} alt="me" />
			</div>
		</div>
	);
}

export default Intro;
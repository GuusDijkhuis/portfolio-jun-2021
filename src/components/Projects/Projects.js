import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Projects.module.css';

import { getAllProjects } from '../../actions/projects';

const Projects = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProjects())
	}, [dispatch])

	const projects = useSelector((state) => state.projects);
	return (
		<div className={classes.Projects} id="projects">
			<h1>Projects</h1>
			<ul className={classes.ProjectList}>
				{ projects.map(project => (
					<li className={classes.ProjectListItem}>
						<div className={classes.Image}>
							<img src={`https://portfolio-june-2021.herokuapp.com/images/${project.picture}`} alt="placeholder" />
						</div>
						<div className={classes.Content}>
							<h2>{project.title}</h2>
							<ul className={classes.Taglist}>
								{project.tags.map(tag => (
									<li>{tag}</li>
								))}
							</ul>
							<p>{project.text}</p>
							<ul className={classes.ButtonList}>
								<li className={classes.ButtonListItem}>
									<a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
								</li>
								<li className={classes.ButtonListItem}>
									<a href={project.websiteUrl} target="_blank" rel="noreferrer">Website</a>
								</li>
							</ul>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Projects;
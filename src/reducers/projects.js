const projectsReducers = (projects = [], action) => {
	
	switch(action.type) {
		case 'FETCH_ALL':
			return action.payload;
		default: 
			return projects;
	}
}

export default projectsReducers;
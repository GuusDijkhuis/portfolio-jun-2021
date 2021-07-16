import * as api from '../api/projects';

export const getAllProjects = () => async (dispatch) => {
	try {
		const { data } = await api.getAllProjects();
		dispatch ({ type: 'FETCH_ALL', payload: data })
	} catch (error) {
		console.log(error);
	}
}

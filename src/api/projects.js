import axios from 'axios';

const url = 'https://portfolio-june-2021.herokuapp.com/projects';

export const getAllProjects = () => axios.get(url);

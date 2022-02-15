import axios from 'axios';

export function postIdeas(data) {
  return axios.post(`${process.env.REACT_APP_API_URL}api/v1/ideas`, {
    idea: {
      name: data.get('name'),
      description: data.get('description'),
      problem: data.get('problem'),
      sphere: data.get('sphere'),
      geo_focus: data.get('geo_focus'),
      investor_requirements: data.get('investor_requirements'),
    },
  }, { withCredentials: true });
}

export function getIdeas() {
  return axios.get(`${process.env.REACT_APP_API_URL}api/v1/ideas`, { withCredentials: true });
}

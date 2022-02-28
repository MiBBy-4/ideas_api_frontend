import axios from 'axios';

export function deleteIdea(ideaId) {
  return axios.delete(`${process.env.REACT_APP_API_URL}api/v1/ideas/${ideaId}`, { withCredentials: true });
}

export function updateIdea(ideaId, data) {
  return axios.patch(`${process.env.REACT_APP_API_URL}api/v1/ideas/${ideaId}`, {
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

import axios from 'axios';

export function postIdeas(data, userId) {
  return axios.post(`${process.env.REACT_APP_API_URL}api/v1/ideas`, {
    idea: {
      name: data.get('name'),
      description: data.get('description'),
      problem: data.get('problem'),
      sphere: data.get('sphere'),
      geo_focus: data.get('geo_focus'),
      investor_requirements: data.get('investor_requirements'),
      customer_id: userId,
    },
  }, { withCredentials: true });
}

export function getIdeas() {
  return axios.get(`${process.env.REACT_APP_API_URL}api/v1/ideas`, { withCredentials: true });
}

export function getIdea(ideaId) {
  return axios.get(`${process.env.REACT_APP_API_URL}api/v1/ideas/${ideaId}`, { withCredentials: true });
}

export function changeNumberOfViews(idea) {
  return axios.patch(`${process.env.REACT_APP_API_URL}api/v1/ideas/${idea.id}`, {
    views: idea.views + 1,
  }, { withCredentials: true });
}

export function setReaction(ideaId, reaction) {
  return axios.post(`${process.env.REACT_APP_API_URL}reactions`, {
    reaction: {
      idea_id: ideaId,
      reaction: reaction,
    },
  }, { withCredentials: true });
}

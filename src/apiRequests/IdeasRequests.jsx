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
      team: data.get('team'),
      next_steps: data.get('next_steps'),
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
  const { id, views } = idea;
  return axios.patch(`${process.env.REACT_APP_API_URL}api/v1/ideas/${id}`, {
    views: views + 1,
  }, { withCredentials: true });
}

export function setReaction(ideaId, reaction) {
  return axios.post(`${process.env.REACT_APP_API_URL}api/v1/reactions`, {
    reaction: {
      idea_id: ideaId,
      liked: reaction,
    },
  }, { withCredentials: true });
}

export function updatePublicationPeriod(id) {
  return axios.patch(`${process.env.REACT_APP_API_URL}api/v1/ideas/${id}/update_publication_period`, { withCredentials: true });
}

import React from 'react';
import axios from 'axios';

export async function postIdeas(data) {
  console.log(data.get('name'));
  axios.post(`${process.env.REACT_APP_API_URL}api/v1/ideas`, {
    idea: {
      name: data.get('name'),
      description: data.get('description'),
      problem: data.get('problem'),
      sphere: data.get('sphere'),
      geo_focus: data.get('geo_focus'),
      investor_requirements: data.get('investor_requirements'),
    },
  }, { withCredentials: true }).then((response) => console.log(response)).catch((error) => {
    console.log('post idea error', error);
  });
}

export function getIdeas(setItems) {
  axios.get(`${process.env.REACT_APP_API_URL}api/v1/ideas`, { withCredentials: true }).then((response) => {
    setItems(response.data.reverse());
  }).catch((error) => {
    console.log(error);
  });
}

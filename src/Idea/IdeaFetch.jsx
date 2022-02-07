const ideasUrl = 'api/v1/ideas';

export async function postFetchResponse(data) {
  await fetch(process.env.REACT_APP_API_URL + ideasUrl, {
    method: 'POST',
    mode: 'cors',
    body: data,
  }).then((response) => response.json());
}

export function getIdeas(setItems) {
  fetch(process.env.REACT_APP_API_URL + ideasUrl)
    .then((response) => response.json())
    .then((responseItems) => {
      setItems(responseItems.reverse());
    });
}

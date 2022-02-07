export async function postFetchResponse(data) {
  await fetch(process.env.REACT_APP_API_URL, {
    method: 'POST',
    mode: 'cors',
    body: data,
  }).then((response) => response.json());
}

export function getIdeas(setItems) {
  fetch(process.env.REACT_APP_API_URL)
    .then((response) => response.json())
    .then((responseItems) => {
      setItems(responseItems.reverse());
    });
}

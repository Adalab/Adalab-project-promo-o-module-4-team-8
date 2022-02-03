const CallToApi = (data) => {
  const remote_server = 'https://awesome-profile-cards.herokuapp.com/card';
  const local_host = 'http://localhost:4000/card'
  return fetch( remote_server , {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

export default CallToApi;

const CallToApi = (data) => {
  const remote_server = 'https://awesomecards.herokuapp.com/#/card';
  const local_host = 'http://localhost:4000/card';

  const serverPort =
    process.env.NODE_ENV === 'production' ? remote_server : local_host;

  return fetch(serverPort, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

export default CallToApi;

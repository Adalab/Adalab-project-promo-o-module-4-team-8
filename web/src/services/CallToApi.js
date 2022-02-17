const CallToApi = (data) => {
  // const remote_server = 'https://awesomecards.herokuapp.com';
  // const local_host = 'http://localhost:4000';

  const serverPort =
    process.env.NODE_ENV === 'production'
      ? 'https://awesomecards.herokuapp.com'
      : 'http://localhost:4000';

  return fetch(`${serverPort}/card`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

export default CallToApi;

const postLogin = (model, email, password) => (
  fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      session: {
        email,
        password,
      },
    }),
  })
    .then((res) => res.json()));

export default postLogin;


export function postLogin(model, email, password) {
  return(
    fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
      body: JSON.stringify({
        "session": {
          "email": `${email}`,
          "password": `${password}`
        }
      })
    })
    .then((res) => res.json()));
}


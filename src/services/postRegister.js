export function postRegister(model, email, fName, password) {
  const fNameArry = fName.split(' ');
  return(
    fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
      body: JSON.stringify({
        "user": {
          "email": `${email}`,
          "first_name": `${fNameArry[0]}`,
          "last_name": `${fNameArry[1]}`,
          "password": `${password}`
        }
      })
    })
    .then((res) => res.json()));
}


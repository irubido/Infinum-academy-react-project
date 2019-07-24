
export function getFlights(model) {
  return(
    fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, {
      method: "GET",
      headers: {
        "Authorization": `${(localStorage.getItem('token')) ? (localStorage.getItem('token')).slice(1, -1) : 'abc'}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
    })
    .then((res) => res.json()));
}


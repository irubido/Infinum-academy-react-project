export function getData(model) {
  return(
    fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, {
      method: "GET",
      headers: {
        "Authorization": `${localStorage.getItem('token')}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
    })
    .then((res) => res.json()));
}


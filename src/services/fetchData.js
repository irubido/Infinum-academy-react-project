

// export const fetchData = async (model, options) => {
  
//   const res = await fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, options);
//     const data = await res.json();
//     return (data);
  
// }

export function fetchData(model, options) {
  return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, options)
    .then((res) => res.json())
    .then((res) => {
      this.appState.token=res.session.token
    });
}

 
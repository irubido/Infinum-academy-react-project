const editUser = (model, email, fName, password, imgUrl) => {
  const fNameArray = fName.split(' ');

  return (
    fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, {
      method: 'PUT',
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          first_name: `${fNameArray[0]}`,
          last_name: `${fNameArray[1]}`,
          password,
          image_url: `${imgUrl}`,
        },
      }),
    })
      .then((res) => res.json()));
};

export default editUser;

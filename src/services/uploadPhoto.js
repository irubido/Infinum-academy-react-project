const uploadPhoto = (image) => {
  const body = new FormData();
  body.append('image', image);

  return image ?
    fetch('https://isa-js-upload.andreicek.dev/upload', {
      method: 'POST',
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
      body,
    }).then((res) => res.json()) : '';
};

export default uploadPhoto;

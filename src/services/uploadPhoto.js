export function uploadPhoto(image) {
  const body = new FormData();
    body.append('image', image);
    if(image){
    return(
    fetch('https://isa-js-upload.andreicek.dev/upload', {
      method: 'POST',
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
      body,
    }).then((res) => res.json()));
  }else{
    return '';
  }
}
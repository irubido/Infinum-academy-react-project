export function uploadPhoto(image) {
  const body = new FormData();
    body.append('image', image);
    return(
    fetch('https://isa-js-upload.andreicek.dev/upload', {
      method: 'POST',
      headers: {
        Authorization: 'EToCrsBQA2fkGPi3E51mqLaD',
      },
      body,
    }).then((res) => res.json()));
}
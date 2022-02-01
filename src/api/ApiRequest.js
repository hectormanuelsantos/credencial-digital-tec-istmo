import ApiConfig from './ApiConfig';
import { Api, username, password } from './UrlApi';

const apiPostFoto = (uri, ncontrol) => {
  let numero = ncontrol;
  let uriImage = uri;
  ApiConfig.post('auth/local', {
    identifier: username,
    password: password,
  })
    .then(res => {
      return res.data;
    })
    .then(user => {
      const formData = new FormData();
      formData.append(
        'data',
        JSON.stringify({
          ncontrol: numero,
        }),
      );
      let filename = numero + '-image.jpg';
      formData.append('files.Foto', {
        uri: uriImage,
        name: filename,
        type: 'image/jpeg',
      });

      if (user.jwt) {
        const response = fetch(`${Api}/credenciales`, {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        });
      }
    });
};
const apiGetFoto = async ncontrol => {
  try {
    const foto = await ApiConfig.get(`credenciales?ncontrol=${ncontrol}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const url = await foto.data[0].Foto.url;
    console.log(`'${url}'`);
  } catch (error) {
    seterror(true);
    toast.show('No se pudo obtener la foto', 2000);
  }
};

export { apiPostFoto, apiGetFoto };

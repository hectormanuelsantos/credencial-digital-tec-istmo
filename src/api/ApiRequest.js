import ApiConfig from './ApiConfig';
import UrlApi from './UrlApi';

const apiPostFoto = (uri, ncontrol) => {
  let numero = ncontrol;
  let uriImage = uri;

  ApiConfig.post('auth/local', {
    identifier: UrlApi.USER,
    password: UrlApi.PASSWORD,
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
        const response = fetch(`${UrlApi.API}/credenciales`, {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        });
      }
    });
};

const apiGetFoto = async (ncontrol, setPhotografy, setStatus) => {
  try {
    const foto = await ApiConfig.get(`credenciales?ncontrol=${ncontrol}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const fotoUrl = await foto.data[0].Foto.url;
    const fotoStatus = await foto.status;

    setPhotografy(fotoUrl);
    setStatus(fotoStatus);
  } catch (error) {}
};

export { apiPostFoto, apiGetFoto };

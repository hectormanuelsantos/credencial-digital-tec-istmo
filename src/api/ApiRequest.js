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

const postCredencial = async (uriImage, almCurp, almEmail, almName, almFname, almSname, almControl) => {
  try {
    //Primera Peticion
    const dataAdmin = await ApiConfig.post('admin/login', {
      email: UrlApi.USER,
      password: UrlApi.PASSWORD,
    });

    //Segunda Peticion
    const dataUser = await ApiConfig.post(
      'users',
      {
        confirmed: true,
        CURP: almCurp,
        username: almCurp,
        email: almEmail,
        password: almCurp,
        name: almName,
        firstLastName: almFname,
        secondLastName: almSname,
      },
      {
        headers: {
          Authorization: `Bearer ${dataAdmin.data.data.token}`,
        },
      },
    );

    //Tercera Peticion
    const formData = new FormData();
    let matri = '18190683';
    formData.append(
      'data',
      JSON.stringify({
        matricula: almControl,
        processStatus: 'enviado',
        candidate: true,
      }),
    );

    let filename = almControl + '-image.jpg';

    formData.append('files.Photography', {
      uri: uriImage,
      name: filename,
      type: 'image/jpeg',
    });

    const dataEstudent = await fetch(`${UrlApi.API}/students`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${dataAdmin.data.data.token}`,
      },
    });

    const Estudentjson = await dataEstudent.json();

    //CuartaPeticion

    const dataUserPut = await ApiConfig.put(
      `users/${dataUser.data._id}`,
      {
        student: Estudentjson._id,
      },
      {
        headers: {
          Authorization: `Bearer ${dataAdmin.data.data.token}`,
        },
      },
    );

    /* console.log(dataUserPut); */
  } catch (error) {
    console.log(error);
  }
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

export { apiPostFoto, apiGetFoto, postCredencial };

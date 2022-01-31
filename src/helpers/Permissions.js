import { askAsync, CAMERA } from 'expo-permissions';
import { launchImageLibraryAsync } from 'expo-image-picker';
import { Alert } from 'react-native';

const loadImageFromGallery = async array => {
  const response = { status: false, image: null };
  const resultPermissions = await askAsync(CAMERA);
  if (resultPermissions.status === 'denied') {
    Alert.alert('Acepta los permisos necesarios');
    return response;
  }
  const result = await launchImageLibraryAsync({
    allowsEditing: true,
    aspect: array,
  });
  if (result.cancelled) {
    return response;
  }
  response.status = true;
  response.image = result.uri;
  return response;
};

const askForPermission = async () => {
  const permissionResult = await askAsync(CAMERA);
  if (permissionResult.status !== 'granted' && permissionResult.status !== 'denied') {
    Alert.alert('No hay permisos para acceder a la cámara', [{ text: 'ok' }]);
    return false;
  }
  return true;
};

export { loadImageFromGallery, askForPermission };

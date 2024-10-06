import uploadPhoto from './5-photo-reject'; // Make sure the import path is correct
import createUser from './4-user-promise'; // Make sure the import path is correct

export default async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto('photo-profile-1.jpg');
    const userResponse = await createUser('Guillaume', 'Salva');

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

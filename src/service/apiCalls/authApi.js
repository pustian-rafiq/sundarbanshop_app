import {axiosInstance} from '../../axiosInstance';

// Register
export const RegisterUser = async payload => {
  try {
    const reponse = await axiosInstance.post(`/auth/register`, payload);
    return reponse.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

// Login
export const LoginUser = async payload => {
  console.log('error');

  try {
    const reponse = await axiosInstance.post('/auth/login', payload);
    return reponse.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

import { authInstance } from './axiosInstance';

/* 나의 프로필 정보 정보 불러오기 */
export const getMyInfo = async (token) => {
    try {
      const response = await authInstance.get(`/user/myinfo`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  /* 프로필 수정 */
  export const editProfile = async (user) => {
    console.log('user', { user });
    try {
      const response = await authInstance.put(`/user`, { user });
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

 
  
import React from 'react';
import { Img } from './ProfileEditStyle';
import ProfileEditNav from '../../components/Header/ProfileEditHeader';
import Image from '../../assets/images/signup-profile.svg';

export default function ProfileEdit() {
 

  return (
    <>
      <ProfileEditNav />
      <Img src={Image} alt="profilelog" />
   
    </>
  );
}

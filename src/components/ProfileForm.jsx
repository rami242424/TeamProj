import React, { useState } from 'react';
import TextInput from './TextInput';
import Button from './Button';

function ProfileForm() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [introduction, setIntroduction] = useState('');

  return (
    <div className="profile-form">
      <h2>프로필 설정</h2>
      <span>나중에 언제든지 변경할 수 있습니다.</span>
      <TextInput label="사용자 이름" value={name} onChange={setName} />
      <TextInput label="계정 ID" value={id} onChange={setId} />
      <TextInput label="소개" value={introduction} onChange={setIntroduction} />
      <Button onClick={() => console.log('Next step clicked')}>짐넥 시작하기</Button>
    </div>
  );
}

export default ProfileForm;

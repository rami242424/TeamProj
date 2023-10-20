import React from 'react';
import styled from 'styled-components';

// 인풋 스타일 컴포넌트 시작 //
const commonColor = '#D9D9D9';

const StyledInput = styled.input`
  width: 322px;
  height: 48px;
  flex-shrink: 0;
  background-color: #fff;
  border: none;
  border-bottom: 1px solid var(--DBDBDB, ${commonColor});
  /* Add any additional styles you need */
`;
// 인풋 스타일 컴포넌트 끝 //

function TextInput({ label, value, onChange }) {
    let placeholderText = '';

    if (label === '사용자 이름') {
        placeholderText = '2~10자 이내여야 합니다.';
    } else if (label === '계정 ID') {
        placeholderText = '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.';
    } else if (label === '소개') {
        placeholderText = '자신의 운동루틴에 대해 소개해 주세요!';
    }



  return (
    <div className="text-input">
      <label>{label}<br/></label>
      <StyledInput
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholderText}
      />
    </div>
  );
}

export default TextInput;

import React from 'react';
import { Background, Section, Container } from './PostModalStyle';
// import Alert from '../Alert/Alert';

export default function PostModal() {
  return (
    <>
        <Background /> 백그라운드래요
        <Section>
            <Container>설정 및 개인정보</Container>
            <Container>로그아웃</Container>
        </Section>
    </>
  )
}

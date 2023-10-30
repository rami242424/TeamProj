import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { loginAtom } from "../../atoms/LoginAtom";
import { userInfoAtom } from "../../atoms/UserAtom";
import { postUserLogin } from "../../api/auth";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/ButtonContainer";
import GlobalSprite from "../../assets/sprite/GlobalSprite";
//import SnsLogo from '../../assets/images/login-logo.svg';
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  Form,
  Section,
  LinkContainer,
  ErrorMessage,
  LoginSection,
  SnsButton
} from "./LoginStyle";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false); //email 유효한지 확인하는 state
  const [pwValid, setPwValid] = useState(false); //pw 유효한지 확인하는 state
  const [isComplete, setIsComplete] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [hasError, setHasError] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const setLogin = useSetRecoilState(loginAtom);
  /*이메일 유효성 검사*/
  const handleEmail = (e) => {
    setEmail(e.target.value); //target은 event가 발생한 DOM요소
    setErrorMsg("");
    setHasError(false);
  };
  /* 비밀번호 유효성 검사 */
  const handlePw = (e) => {
    setPw(e.target.value);
    setErrorMsg("");
    setHasError(false);
  };

  /* 로그인 요청을 보내고 결과 반환 */
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = await postUserLogin(email, pw);
    console.log(loginData);
    if (loginData.status === 422) {
      setErrorMsg("*이메일 또는 비밀번호가 일치하지 않습니다");
      setHasError(true);
      setIsComplete(false);
    } else {
      localStorage.setItem("token", loginData.user.token);
      setUserInfo({
        ...userInfo,
        account: loginData.user.accountname,
        profileImg: loginData.user.image,
        username: loginData.user.username,
        intro: loginData.user.intro
      });
      setIsComplete(!isComplete);
      setLogin(true);
      navigate("/home", {
        state: {
          token: loginData.user.token
        }
      });
    }
  };

  /* 버튼 활성화 */
  const handleActivateButton = () => {
    return email !== "" && pw !== "";
  };

  const [isOpen, setIsOpen] = useState(false); // State to determine if the modal is open

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  // ... rest of your component logic
  
  return (
    <>
      <button onClick={toggleModal}>Open Login</button> {/* This button is just for testing */}
      
      {isOpen && 
      <ModalBackground onClick={toggleModal}>
        <ModalContainer isOpen={isOpen} onClick={e => e.stopPropagation()}>
          <Container>
            <Title>로그인</Title>
            <Form onSubmit={handleLogin}>
              <Section>
                <Input
                  label="이메일"
                  placeholder="이메일 주소를 입력해주세요"
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                  required
                />
                <Input
                  label="비밀번호"
                  placeholder="비밀번호를 입력해주세요"
                  id="password"
                  type="password"
                  name="password"
                  value={pw}
                  onChange={handlePw}
                  required
                />
                {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
              </Section>

              <LoginSection>
                <Button
                  width="322px"
                  type="submit"
                  disabled={!handleActivateButton()}>
                  로그인
                </Button>
                <SnsButton to="kakao" className="kakao-login">
                  <GlobalSprite id="message-circle" />
                  {/*카카오톡 로고*/}
                  카카오톡 계정으로 로그인
                </SnsButton>
                <SnsButton to="google" className="google-login">
                  <GlobalSprite id="google-g-logo-1" />
                  구글 계정으로 로그인
                </SnsButton>
                <SnsButton to="facebook" className="facebook-login">
                  <GlobalSprite id="facebook" />
                  페이스북 계정으로 로그인
                </SnsButton>
                <LinkContainer>
                  <Link to="/account/signup">이메일로 회원가입 </Link> |{" "}
                  <Link to="/account/findPw">비밀번호 찾기</Link>
                </LinkContainer>
              </LoginSection>
            </Form>
          </Container>
        </ModalContainer>
      </ModalBackground>
      }
    </>
  );
}





export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled(Container)`
  position: absolute;
  bottom: 0;
  width: 390px;
  height: 200px;
  transform: translateY(${props => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-out;
  background-color: white;
  border-radius: 15px 15px 0 0;
`;

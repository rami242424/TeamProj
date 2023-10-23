import styled from "styled-components";
import imgSrc from "./JoinPage";

const Container = styled.section`
  text-align: center;
`;

const ProfileImage = styled.div`
  display: block;
  position: relative;
  width: 11rem;
  height: 11rem;
  margin: 3.5rem auto 5.5rem;
  background-color: white;
  border: 1px solid rgb(196, 196, 196);
  border-radius: 50%;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 3.6em;
    height: 3.6rem;
    background: url(${imgSrc}) no-repeat center / 3.6rem 3.6rem;
    z-index: 2;
    }
`;

export { Container, ProfileImage };

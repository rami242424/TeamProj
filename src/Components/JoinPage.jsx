// import { useState } from "react";

// const profile =( ) => {
// // const profile = ({ handlePage })
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [accountname, setAccountname] = useState("");
//     const [imgSrc, setImgSrc] = useState(""
//         // "https://api.mandarin.weniv.co.kr/Ellipse.png"
//         // 프사없을때 배경 주소 설정
//     );
//     // const [info, setInfo] = useState("");
//     // App.js에서 주석처리한부분과 연결되는 부분

//     const submitJoin = () => {
//         const joinData = {
//           user: {
//             username: username,
//             email: email,
//             password: password,
//             accountname: accountname,
//             intro: info,
//             image: imgSrc,
//           },
//         };
//         join(joinData);
//       };

//     /* 이미지 업로드 */
//     const uploadImage = async (imageFile) => {
//         const baseUrl = "https://api.mandarin.weniv.co.kr/";
//         const reqUrl = baseUrl + "image/uploadfile";
//         const form = new FormData();
//         form.append("image", imageFile);
    
//         const res = await fetch(reqUrl, {
//           method: "POST",
//           body: form,
//         });
    
//         const json = await res.json();
//         setImgSrc(baseUrl + json.filename);
//       };

//     const handleChangeImage = (e) => {
//         const file = e.target.files[0];
//         uploadImage(file);
//       };





//     return (
//         <>
//             <section>
//                 <h2>프로필 설정</h2>
//                 <p>나중에 언제든지 변경할 수 있습니다.</p>
//                 <label src={imgSrc} htmlFor="profileImg">
//                   <img src={imgSrc} alt="사용자 프로필 이미지" id="imagePre" />
//                 </label>
//                 <input
//                 type="file"
//                 onChange={handleChangeImage}
//                 id="profileImg"
//                 name="image"
//                 accept="image/*"
//                 />
//                 <div>
//                 <label htmlFor="userNameInput">사용자 이름</label>
//                 <input
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     type="text"
//                     id="userNameInput"
//                     name="username"
//                     placeholder="2~10자 이내여야 합니다."
//                 />
//                 </div>
//                 <div>
//                 <label htmlFor="userIdInput">계정 ID</label>
//                 <input
//                     value={accountname}
//                     onChange={(e) => setAccountname(e.target.value)}
//                     type="text"
//                     id="userIdInput"
//                     name="accountname"
//                     placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."
//                 />
//                 </div>
//                 <div>
//                 <label htmlFor="userIntroInput">소개</label>
//                 <input
//                     type="text"
//                     onChange={(e) => setInfo(e.target.value)}
//                     id="userIntroInput"
//                     name="intro"
//                     placeholder="자신의 운동루틴에 대해 소개해 주세요!"
//                 />
//                 </div>
//                 <button type="button" onClick={submitJoin}>
//                 짐넥 시작하기
//                 </button>
//             </section>
//         </>
//     );
// }

// export default profile;

import { useState } from "react";
import styled from 'styled-components';

import {ProfileImage, Container} from "./joinPageStyle";
// import {info} from "../App";


const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountname, setAccountname] = useState("");
  const [imgSrc, setImgSrc] = useState(""); 

  const submitJoin = () => {
    const joinData = {
      user: {
        username: username,
        email: email,
        password: password,
        accountname: accountname,
        intro: info,
        image: imgSrc, 
      },
    };
    join(joinData);
  };

  const uploadImage = async (imageFile) => {
    const baseUrl = "https://api.mandarin.weniv.co.kr/";
    const reqUrl = baseUrl + "image/uploadfile";
    const form = new FormData();
    form.append("image", imageFile);

    const res = await fetch(reqUrl, {
      method: "POST",
      body: form,
    });

    const json = await res.json();
    setImgSrc(baseUrl + json.filename);
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    uploadImage(file);
  };

  return (
    <>
      <Container>
        <h2>프로필 설정</h2>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        <label src={imgSrc} htmlFor="profileImg">
          <ProfileImage>
            {imgSrc && <img src={imgSrc} alt="사용자 프로필 이미지" id="imagePre" />}
          </ProfileImage>
        </label>
        <input
          type="file"
          onChange={handleChangeImage}
          id="profileImg"
          name="image"
          accept="image/*"
        />
        <div>
          <label htmlFor="userNameInput">사용자 이름</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="userNameInput"
            name="username"
            placeholder="2~10자 이내여야 합니다."
          />
        </div>
        <div>
          <label htmlFor="userIdInput">계정 ID</label>
          <input
            value={accountname}
            onChange={(e) => setAccountname(e.target.value)}
            type="text"
            id="userIdInput"
            name="accountname"
            placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."
          />
        </div>
        <div>
          <label htmlFor="userIntroInput">소개</label>
          <input
            type="text"
            onChange={(e) => setInfo(e.target.value)}
            id="userIntroInput"
            name="intro"
            placeholder="자신의 운동루틴에 대해 소개해 주세요!"
          />
        </div>
        <button type="button" onClick={submitJoin}>
          짐넥 시작하기
        </button>
      </Container>
    </>
  );
};

export default Profile;

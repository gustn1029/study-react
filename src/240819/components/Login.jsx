import { useState } from "react";

function Login(props) {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if(!userId) {
        alert("아이디를 입력하지 않았습니다.");
        return;
    } 

    if(!userPassword) {
        alert("비밀번호를 입력하지 않았습니다.");
        return;
    } 

    console.log(userId,"userId");
    console.log(userPassword,"userPassword");
    console.log(props.user.idUser,"props.user.idUser");
    console.log(props.user.pwUser,"props.user.pwUser");

    if(props.user.idUser === userId && props.user.pwUser == userPassword) {
      props.setIsLogin(true);
    } else {
      alert("아이디 또는 비밀번호를 확인해주세요.");
      return;
    }
  };

  const handleLoginInput = (e) => {
    setUserId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setUserPassword(e.target.value);
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 : 
                <input type="text" onChange={handleLoginInput} value={userId} />
      </label>
      <br/>
      <label>
        비밀번호 :
        <input type="password" onChange={handlePasswordInput} value={userPassword} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;
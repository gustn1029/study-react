import React from 'react'

const Homepage = (props) => {
    const logoutHandler = () => {
        alert("로그아웃 됐습니다.");
        props.setIsLogin(false);
    }
  return (
    <>
        <div>Homepage</div>
        <button onClick={logoutHandler}>로그아웃</button>
    </>
  )
}

export default Homepage
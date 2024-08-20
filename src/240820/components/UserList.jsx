import React, { useState } from "react";
import UserListItem from "./UserListItem";

const UserList = (props) => {
  const [openId, setOpenId] = useState(null);
  const openIdChangeHandler = (id) => {
    setOpenId((prevId) => prevId === id ? null: id);
  }
  return (
    <>
      <h2>실습1</h2>
      <ul style={{maxWidth: '300px'}}>
        {props.data.map((el) => (
          <UserListItem
            key={`${el.id}__${el.name}`}
            id={el.id}
            name={el.name}
            email={el.email}
            job={el.job}
            isOpen={openId === el.id}
            isOpenHandler={()=>openIdChangeHandler(el.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default UserList;

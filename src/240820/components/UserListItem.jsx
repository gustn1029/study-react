import React from "react";

const UserListItem = (props) => {
  const { id, name, email, job, isOpen, isOpenHandler } = props;
  
  return (
    <li>
      <h3>
        <button onClick={isOpenHandler}>{name}</button>
      </h3>
      {isOpen ? (
        <>
          <p>Email: {email}</p>
          <p>Job: {job}</p>
        </>
      ) : null}
    </li>
  );
};

export default UserListItem;

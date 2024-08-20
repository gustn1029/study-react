import React from 'react'

export default function PetListItem(props) {
  const {name, species, age, id} = props;
  return (
    <li id={`${id}__${name}`}>
      <p>{`${name}는 ${species}입니다. 그리고 ${age}살 입니다.`}</p>
    </li>
  )
}

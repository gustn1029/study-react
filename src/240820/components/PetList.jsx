import React from 'react'
import PetListItem from './PetListItem'

export default function PetList({data}) {
  return (
    <ul>
        {data.map((el)=> <PetListItem key={`${el.id}__${el.name}`} name={el.name} id={el.id} species={el.species} age={el.age} />)}
    </ul>
  )
}

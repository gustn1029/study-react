import React from 'react'
import NationListItem from './NationListItem'
import styled from 'styled-components'

const Nations = styled.ul`
  display: grid;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
`

const NationList = ({data}) => {
  return (
    <Nations>
      {data.map((el) => <NationListItem key={`${el.id}__${el.title}`} nation={el.title} population={el.population} />)}
    </Nations>
  )
}

export default NationList
import React from 'react'
import styled from 'styled-components'

const NationItem = styled.li`
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    padding: 15px 10px;
    border-radius: 10px;

    h3 {
        margin: 0 0 10px;
    }

    data {
        color: #767676;
    }
`

export default function NationListItem({nation, population}) {
  return (
    <NationItem>
        <h3>{nation}</h3>
        <data value={population}>{population}</data>
    </NationItem>
  )
}

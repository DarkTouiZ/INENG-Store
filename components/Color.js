import React from 'react'
import styled from 'styled-components'

const ColorContainer = styled.div`
    color: props => props.color;
    border-radius: 50%;
`
const Color = () => {
  return (
    <ColorContainer color="red">
      
    </ColorContainer>
  )
}

export default Color
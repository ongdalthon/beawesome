import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'

const NextImage = ({ ...props }) => {
  return (
    <StyledWrapper>
      <Image layout="fill" {...props} className="autoImage" />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 100%;

  & .autoImage {
    height: auto !important;
    position: relative !important;
    object-fit: contain !important;
  }
`

export default NextImage

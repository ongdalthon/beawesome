import React, { children } from 'react'
import { styled } from 'styled-components'

const AppLayout = ({ children }) => {
  return <AppLayoutContainer>{children}</AppLayoutContainer>
}

const AppLayoutContainer = styled.div`
  max-width: 375px;
  min-width: 375px;
  margin: 0 auto;
`

export default AppLayout

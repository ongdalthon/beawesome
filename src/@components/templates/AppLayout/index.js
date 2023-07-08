import React, { children } from 'react'
import { styled } from 'styled-components'

const AppLayout = ({ children }) => {
  return <AppLayoutContainer>{children}</AppLayoutContainer>
}

const AppLayoutContainer = styled.div`
  max-width: 375px;
  min-width: 375px;
  margin: 0 auto;
  padding: 0px 20px;
  background: var(
    --bea-gra-1,
    linear-gradient(130deg, #ff7f1c 0%, #ff512b 100%)
  );
`

export default AppLayout

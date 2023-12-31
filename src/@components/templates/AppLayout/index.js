import { useRouter } from 'next/router'
import React, { children } from 'react'
import { styled } from 'styled-components'
import { palette } from '~/@styles/palette'

const AppLayout = ({ children }) => {
  const router = useRouter()
  const { id, category } = router.query
  const isDetail = id || category ? true : false

  return <AppLayoutContainer id={isDetail}>{children}</AppLayoutContainer>
}

const AppLayoutContainer = styled.div`
  max-width: 375px;
  min-width: 375px;
  margin: 0 auto;
  padding: 0px 20px;
  background: ${({ id }) =>
    id
      ? `${palette.BEA_WHITE}`
      : `linear-gradient(130deg, #ff7f1c 0%, #ff512b 100%)`};
  overflow: hidden;
`

export default AppLayout

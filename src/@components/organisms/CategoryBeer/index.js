import React from 'react'
import { styled } from 'styled-components'
import { Flex } from '~/@components/atoms/Flex'
import { Space } from '~/@components/atoms/Space'
import { Text } from '~/@components/atoms/Text'
import { palette } from '~/@styles/palette'

const CategoryBeer = ({ src = '/larger.svg', type, name }) => {
  return (
    <CategoryBeerContainer src={src}>
      <Flex gap={5}>
        <Text
          color={palette.BEA_MAIN_700}
          size={24}
          weight={900}
          font={'Dozer One'}
          text={type}
        />

        <Text
          color={palette.BEA_MAIN_700}
          size={24}
          weight={900}
          font={'Dozer One'}
          text={name}
        />
      </Flex>
    </CategoryBeerContainer>
  )
}

const CategoryBeerContainer = styled.div`
  padding: 16px;
  cursor: pointer;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  background-color: #d9d9d9;
  background: ${({ src }) => `url(${src}) no-repeat`};
  background-position: bottom 0px right 0px;
  width: 155px;
  height: 160px;
`

export default CategoryBeer

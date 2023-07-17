import React from 'react'
import { styled } from 'styled-components'
import { Flex } from '~/@components/atoms/Flex'
import { Text } from '~/@components/atoms/Text'
import { palette } from '~/@styles/palette'

const DetailStat = ({ label, data, end = false }) => {
  return (
    <DetailStatContainer isEnd={end}>
      <Flex direction="row" justify="start">
        <Flex align="start" gap={5}>
          <Text text={label} font="Spoqa" weight={500} size={12} />
          <Text
            text={data}
            font="Dozer One"
            weight={500}
            size={48}
            color={palette.BEA_MAIN_800}
          />
        </Flex>
      </Flex>
    </DetailStatContainer>
  )
}

const DetailStatContainer = styled.div`
  width: 100%;
  padding: 8px 16px;
  border-bottom: ${({ isEnd }) =>
    isEnd ? 'none' : `1px solid ${palette.BEA_NEU_200}`};
`

export default DetailStat

import { useState } from 'react'
import { Flex } from '~/@components/atoms/Flex'
import Input from '~/@components/molecules/Input'
import { Space } from '~/@components/atoms/Space'
import { Button } from '~/@components/molecules/Button'
import SearchBeer from '~/@components/organisms/SearchBeer'
import NextImage from '~/@components/molecules/ImageWrapper'
import { Text } from '~/@components/atoms/Text'
import { palette } from '~/@styles/palette'
import { styled } from 'styled-components'

export default function Home() {
  const [beerName, setBeerName] = useState('')
  return (
    <HomeContainer>
      <Flex>
        <Space height={'93px'} />
        <NextImage src={'/logo.svg'} />
        <Space height={'16px'} />
        <Text
          text={'내게 딱- 맞는 맥주찾기'}
          font="locus"
          size={18}
          color="white"
        />
        <Space height={'100px'} />
        <Flex gap={16}>
          <SearchBeer state={beerName} setState={setBeerName} />
          <Button
            color={palette.BEA_MAIN_200}
            size={14}
            padding={'8px 16px'}
            border={`1px solid ${palette.BEA_MAIN_200}`}
            text={'비어썸에게 추천받을래요'}
            radius={8}
          />
        </Flex>
      </Flex>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
`

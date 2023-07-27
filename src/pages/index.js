import { useEffect, useState } from 'react'
import { Flex } from '~/@components/atoms/Flex'
import { Space } from '~/@components/atoms/Space'
import { Button } from '~/@components/molecules/Button'
import SearchBeer from '~/@components/organisms/SearchBeer'
import NextImage from '~/@components/molecules/ImageWrapper'
import { Text } from '~/@components/atoms/Text'
import { palette } from '~/@styles/palette'
import { styled } from 'styled-components'
import useSWR from 'swr'
import axios from 'axios'

export default function Home() {
  const [beerName, setBeerName] = useState('')
  const [isRecommended, setIsRecommended] = useState(false)

  const fetcher = async (url) => {
    return await axios.get(url)
  }

  const { data } = useSWR(() => '/api/product_list', fetcher)
  const products = data?.data?.product

  console.log(data)

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
          <SearchBeerAnimation isClicked={isRecommended}>
            <SearchBeer
              state={beerName}
              setState={setBeerName}
              data={products}
            />
          </SearchBeerAnimation>

          <AnimationContainer isClicked={isRecommended}>
            <Button
              isClicked={isRecommended}
              onClick={setIsRecommended}
              color={palette.BEA_MAIN_200}
              size={14}
              padding={'8px 16px'}
              border={`1px solid ${palette.BEA_MAIN_200}`}
              text={'비어썸에게 추천받을래요'}
              radius={8}
            />
          </AnimationContainer>
          {isRecommended ? (
            <RecommendBeerContainer>
              <Flex gap={16}>
                <Button
                  color={palette.BEA_MAIN_200}
                  size={14}
                  padding={'30px 16px'}
                  border={`1px solid ${palette.BEA_MAIN_200}`}
                  text={'알콜 맥주 추천'}
                  radius={20}
                />
                <Button
                  color={palette.BEA_MAIN_200}
                  size={14}
                  padding={'30px 16px'}
                  border={`1px solid ${palette.BEA_MAIN_200}`}
                  text={'논알콜 맥주 추천'}
                  radius={20}
                />
              </Flex>
            </RecommendBeerContainer>
          ) : (
            ''
          )}
        </Flex>
      </Flex>
    </HomeContainer>
  )
}

const SearchBeerAnimation = styled.div`
  transition: all 300ms;
  opacity: ${({ isClicked }) => (isClicked ? `0%` : `100%`)};
  width: 100%;
`

const AnimationContainer = styled.div`
  transition: all 300ms;
  transform: ${({ isClicked }) =>
    isClicked ? `translateY(-55px)` : `translateY(0px)`};
  width: 100%;
`

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
`

const RecommendBeerContainer = styled.div`
  width: 100%;
  transform: translateY(-55px);
`

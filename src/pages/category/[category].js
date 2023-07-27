import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import { Flex } from '~/@components/atoms/Flex'
import { Space } from '~/@components/atoms/Space'
import { Text } from '~/@components/atoms/Text'
import { palette } from '~/@styles/palette'
import { v4 as uuidv4 } from 'uuid'

const data = [
  {
    id: 1,
    src: '/lager_category.svg',
    title: '아사히 슈퍼 드라이 생맥주 캔',
    company: '아사히',
    price: '1300',
    tag: ['라거', '생맥주', '330ml', '5%'],
  },
  {
    id: 2,
    src: '/lager_category.svg',
    title: '아사히 슈퍼 드라이 생맥주 캔',
    company: '아사히',
    price: '1300',
    tag: ['라거', '생맥주', '330ml', '5%'],
  },
  {
    id: 3,
    src: '/lager_category.svg',
    title: '아사히 슈퍼 드라이 생맥주 캔',
    company: '아사히',
    price: '1300',
    tag: ['라거', '생맥주', '330ml', '5%'],
  },
  {
    id: 4,
    src: '/lager_category.svg',
    title: '아사히 슈퍼 드라이 생맥주 캔',
    company: '아사히',
    price: '1300',
    tag: ['라거', '생맥주', '330ml', '5%'],
  },
]

const BeerCategory = () => {
  return (
    <BeerCategoryContainer>
      <Flex>
        <CategoryTop>
          <Flex>
            <CategoryHeader>
              <Flex direction="row" justify="space-between">
                <Flex direction="row" gap={8} align="end" justify="start">
                  <Flex width="auto">
                    <Image
                      src={'/back_colored.svg'}
                      alt="back"
                      width={24}
                      height={24}
                    />
                    <Space height={'2px'} />
                  </Flex>
                  <Text
                    font={'Dozer One'}
                    background={
                      'linear-gradient(130deg, #ff7f1c 0%, #ff512b 100%)'
                    }
                    gradient={true}
                    size={24}
                    height={100}
                    text={'Lager'}
                  />
                  <Text
                    background={
                      'linear-gradient(130deg, #ff7f1c 0%, #ff512b 100%)'
                    }
                    gradient={true}
                    size={24}
                    text={'라거'}
                  />
                </Flex>
                <Flex width="auto">
                  <Image
                    src={'/toggle_colored.svg'}
                    alt="toggle"
                    width={24}
                    height={24}
                  />
                  <Space height={'2px'} />
                </Flex>
              </Flex>
            </CategoryHeader>
            <CategoryDescription>
              <Flex direction="row" gap={3}>
                <Image
                  src={'/lager_category.svg'}
                  width={73}
                  height={92}
                  alt="lager"
                />
                <Text
                  text={
                    '10도 정도의 낮은 온도에서 발효시킨 맥주. 현재 대중들이 소비하고 있는 대표적인 맥주이며  탄산감이 강하고 황금빛을 띈다. 독일어로 저장고(Lagerung)에서 유래했다.'
                  }
                  color="#8B8A88"
                  size={12}
                  weight={500}
                />
              </Flex>
            </CategoryDescription>
          </Flex>
        </CategoryTop>
        <Space height={'12px'} />
        <CategoryBody>
          <Flex direction="row" justify="space-between">
            <Text text={'라거 리스트'} size={12} color="#8B8A88" />
            <Text text={'비어썸 추천순'} size={12} color="#8B8A88" />
          </Flex>
        </CategoryBody>
        <Space height={'12px'} />
        <Flex align="start" gap={13}>
          {data.map((item) => (
            <EachBeerCategory key={uuidv4()} {...item} />
          ))}
        </Flex>
      </Flex>
    </BeerCategoryContainer>
  )
}

const EachBeerCategory = ({
  src,
  title,
  company,
  price,
  tag = ['라거', '생맥주', '330ml', '5%'],
  isPopular,
}) => {
  return (
    <EachBeerCategoryWrapper>
      <Flex direction="row" gap={12}>
        <Image src={'/lager_category.svg'} width={88} height={88} alt="beer" />
        <Flex align="start" gap={13}>
          <Flex align="start" gap={4}>
            <Flex align="start">
              <Text
                weight={500}
                size={14}
                color={palette.BEA_NEU_900}
                text={title}
              />
              <Text
                weight={400}
                size={12}
                color={palette.BEA_NEU_800}
                text={company}
              />
            </Flex>
            <Text
              weight={500}
              size={12}
              color={palette.BEA_NEU_800}
              text={`${price}원`}
            />
          </Flex>
          <Flex direction="row" justify="start" gap={4}>
            {tag.map((el) => (
              <TagWrapper key={uuidv4()}>
                <Text
                  weight={400}
                  color={palette.BEA_NEU_500}
                  size={12}
                  text={el}
                />
              </TagWrapper>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </EachBeerCategoryWrapper>
  )
}

const EachBeerCategoryWrapper = styled.div`
  padding: 8px 16px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  border-radius: 8px;
`

const TagWrapper = styled.div`
  padding: 2px 8px 1px 8px;
  background-color: ${palette.BEA_MAIN_50};
`

const CategoryBody = styled.div`
  width: 100%;
`

const BeerCategoryContainer = styled.div`
  width: 100%;
`

const CategoryTop = styled.div`
  width: 100%;
  box-shadow: 0px 6px 20px 0px rgba(57, 57, 57, 0.15);
  border-radius: 0px 0px 20px 20px;
`

const CategoryDescription = styled.div`
  width: 100%;
  padding: 16px 40px 8px 40px;
`

const CategoryHeader = styled.div`
  width: 100%;
  padding: 24px 16px 16px 16px;
`

export default BeerCategory

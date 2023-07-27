import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import useSWR from 'swr'
import { v4 as uuidv4 } from 'uuid'
import { Flex } from '~/@components/atoms/Flex'
import Image from 'next/image'
import NextImage from '~/@components/molecules/ImageWrapper'
import { styled } from 'styled-components'
import { Space } from '~/@components/atoms/Space'
import { Text } from '~/@components/atoms/Text'
import { palette } from '~/@styles/palette'
import { Button } from '~/@components/molecules/Button'
import { Tag } from '~/@components/molecules/Tag'
import DetailStat from '~/@components/molecules/DetailStat'
import Link from 'next/link'
import db from '../@models'
import CategoryBeer from '~/@components/organisms/CategoryBeer'

const PRODUCT_TB = db.PRODUCT_TB

export const getStaticPaths = async () => {
  const product = await PRODUCT_TB.findAll({
    attributes: ['PR_ID_PK', 'PR_NAME'],
  })

  const paths = product?.map((item) => ({
    params: { id: item.dataValues.PR_ID_PK.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const PR_ID = params.id

  const product = await PRODUCT_TB.findOne({
    where: { PR_ID_PK: PR_ID },
    attributes: [
      'PR_NAME',
      'PR_COMPANY',
      'PR_TAG',
      'PR_SALES',
      'PR_PARING',
      'PR_DES',
      'PR_ALC',
      'PR_NON',
      'PR_IMAGE',
      'PR_BACKGROUND',
      'PR_PRICE',
    ],
  })

  const data = product.dataValues

  // Pass data to the page via props
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data: JSON.stringify(data) },
    revalidate: 10,
  }
}

const Index = ({ data }) => {
  const parsedData = JSON.parse(data)
  const [isSearching, setIsSearching] = useState(false)

  console.log(parsedData)

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: isSearching ? '100vh' : '100%',
      }}
    >
      <Flex overflow="hidden">
        <BeforeTransition search={isSearching}>
          <Flex direction="row" justify="space-between">
            <Link href={'/'} style={{ textDecoration: 'none' }}>
              <Image src={'/logo.svg'} alt="logo" width={95} height={43} />
            </Link>
            <Image
              onClick={() => setIsSearching(!isSearching)}
              src={'/search.svg'}
              alt="search"
              width={24}
              height={24}
            />
          </Flex>
        </BeforeTransition>
        <Space height={'12px'} />
        <div style={{ height: '420px', position: 'relative', width: '100%' }}>
          <TransitionContainer search={isSearching}>
            <ImageContainer search={isSearching}>
              <NextImage src={parsedData?.PR_IMAGE} />
            </ImageContainer>
          </TransitionContainer>
          <DescriptionTransit search={isSearching}>
            <Flex align="start">
              <Flex direction="row" justify="space-between">
                <Text
                  text={parsedData?.PR_NAME}
                  font="Spoqa"
                  size={isSearching ? 16 : 20}
                  weight={isSearching ? 500 : 700}
                  color={isSearching ? palette.BEA_MAIN_600 : 'black'}
                />
                {isSearching ? (
                  ''
                ) : (
                  <Image
                    src={'/share.svg'}
                    width={24}
                    height={24}
                    alt="share"
                  />
                )}
              </Flex>
              <Space height={'6px'} />
              <Text
                text={parsedData?.PR_COMPANY}
                font="Spoqa"
                size={isSearching ? 12 : 14}
                color={palette.BEA_NEU_700}
                weight={400}
              />
              <Space height={'16px'} />
              <Text
                text={`${parsedData?.PR_PRICE} 원`}
                font="Spoqa"
                size={isSearching ? 14 : 18}
                color={palette.BEA_BLACK}
                weight={500}
              />
            </Flex>
          </DescriptionTransit>
        </div>

        <BeforeTransit search={isSearching}>
          <Flex>
            <DescriptionContainer>
              <Space height={'24px'} />
              <Flex direction="row" justify="start" gap={8}>
                {JSON.parse(parsedData?.PR_TAG).map((el) => (
                  <Tag
                    width="auto"
                    weight={600}
                    color={palette.BEA_MAIN_800}
                    size={12}
                    key={uuidv4()}
                    radius={12}
                    padding={'4px 16px'}
                    text={el.name}
                    border={`1px solid ${palette.BEA_MAIN_800}`}
                  />
                ))}
              </Flex>
              <Space height={'24px'} />
            </DescriptionContainer>
            <StatContainer>
              <Space height={'12px'} />
              <Flex align="start" gap={16}>
                <DetailStat label={'도수'} data={parsedData?.PR_ALC} />
                <DetailStat
                  label={'논알콜여부'}
                  data={parsedData?.PR_NON ? 'YES' : 'NO'}
                />
                <DetailStat label={'사이즈'} data={'330ML'} end={true} />
              </Flex>
            </StatContainer>
            <GradationContainer />
            <NextImage src={parsedData?.PR_BACKGROUND} />
            <Space height={'12px'} />
            <QuotationContainer>
              <Flex direction="row">
                <Flex justify="start" width="auto">
                  <Text text={'“'} size={48} />
                </Flex>
                <Flex width="auto">
                  <Text text={parsedData?.PR_DES} size={24} />
                </Flex>
                <Flex justify="start" width="auto">
                  <Text text={'”'} size={48} />
                </Flex>
              </Flex>
            </QuotationContainer>
            <Space height={'54px'} />
            <Flex align="start">
              <Text text={'함께하면 좋아요'} size={14} />
              <Space height={'12px'} />
              <Flex direction="row" justify="start" overflow="auto hidden">
                <Flex direction="row" gap={8} width="auto">
                  {JSON.parse(parsedData?.PR_PARING)?.map((el) => (
                    <EachPairing key={uuidv4()} url={el.url} />
                  ))}
                  {JSON.parse(parsedData?.PR_PARING)?.map((el) => (
                    <EachPairing key={uuidv4()} url={el.url} />
                  ))}
                </Flex>
              </Flex>
            </Flex>
            <FooterContainer>
              <Flex direction="row" gap={8}>
                <ChiMakBtn>
                  <Text
                    text={'친구야 치맥 꼬?'}
                    color={palette.BEA_WHITE}
                    size={14}
                    weight={500}
                  />
                </ChiMakBtn>
                <ShareBtn>
                  <Text
                    text={'공유하기'}
                    color={palette.BEA_MAIN_600}
                    size={14}
                    weight={500}
                  />
                </ShareBtn>
              </Flex>
            </FooterContainer>
          </Flex>
        </BeforeTransit>
      </Flex>
      <AfterTransit search={isSearching}>
        <AfterInputContainer>
          <Flex direction="row" justify="space-between">
            <Flex direction="row" width="auto" gap={8}>
              <Image
                style={{ cursor: 'pointer' }}
                onClick={() => setIsSearching(false)}
                src={'/back.svg'}
                width={24}
                height={24}
                alt="back"
              />
              <AfterInput placeholder="내가 먹는 맥주를 찾아보세요" />
            </Flex>
            <Image
              src={'/search_white.svg'}
              width={24}
              height={24}
              alt="back"
            />
          </Flex>
        </AfterInputContainer>
        <Flex align="start">
          <Text
            text={'방금 보던 맥주'}
            size={12}
            weight={500}
            color={palette.BEA_NEU_500}
          />
        </Flex>
        <Space height={'140px'} />
        <div
          style={{ width: '100%', height: '1px', backgroundColor: '#D1CFCE' }}
        ></div>
        <Space height={'12px'} />
        <Text
          text={'더 많은 맥주 카테고리'}
          size={12}
          weight={500}
          color={palette.BEA_NEU_500}
        />
        <Space height={'12px'} />
        <Flex align="start" overflow="scroll" height="400px" justify="start">
          <Flex wrap="wrap" direction="row" justify="space-between" gap={20}>
            <CategoryBeer src="/larger.svg" type={'lager'} name={'라거'} />
            <CategoryBeer src="/larger.svg" type={'lager'} name={'라거'} />
            <CategoryBeer src="/larger.svg" type={'lager'} name={'라거'} />
            <CategoryBeer src="/larger.svg" type={'lager'} name={'라거'} />
            <CategoryBeer src="/larger.svg" type={'lager'} name={'라거'} />
            <Space margin={'90px'} />
          </Flex>
        </Flex>

        <FooterContainer>
          <MoreBeerBtn>
            <Text
              color="white"
              size={20}
              weight={700}
              text={'더 많은 맥주 보러가기'}
              cursor="pointer"
            />
          </MoreBeerBtn>
        </FooterContainer>
      </AfterTransit>
    </div>
  )
}

const MoreBeerBtn = styled.div`
  background-color: ${palette.BEA_MAIN_800};
  width: 330px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
`

const BeforeTransit = styled.div`
  width: 100%;
  opacity: ${({ search }) => (search ? '0%' : '100%')};
  transition: all 300ms;
`

const BeforeTransition = styled.div`
  width: 100%;
  opacity: ${({ search }) => (search ? '0%' : '100%')};
  transition: all 300ms;
`

const AfterTransition = styled.div`
  width: 100%;
  opacity: ${({ search }) => (search ? '100%' : '0%')};
  transition: all 300ms;
`

const AfterTransit = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;

  opacity: ${({ search }) => (search ? '100%' : '0%')};
  pointer-events: ${({ search }) => (search ? 'visible' : 'none')};
  transition: all 300ms;
`

const TransitionContainer = styled.div`
  width: 100%;
  display: flex;
  height: 340px;
  flex-direction: ${({ search }) => (search ? 'row' : 'column')};
  transform: ${({ search }) => (search ? 'translate(0%, 10%)' : 'none')};
  justify-content: start;
  transition: all 300ms linear;
`

const FooterContainer = styled.div`
  position: fixed;
  bottom: 12px;
`

const AfterInputContainer = styled.div`
  background-color: ${palette.BEA_MAIN_700};
  padding: 8px;
  margin-bottom: 10px;
`

const AfterInput = styled.input`
  border: none;
  outline: none;
  width: 250px;
  font-family: 'Spoqa';
  background-color: ${palette.BEA_MAIN_700};
  &::placeholder {
    font-family: 'Spoqa';
    color: ${palette.BEA_WHITE};
    font-size: 16px;
    font-weight: 500;
  }
  color: ${palette.BEA_WHITE};
  font-size: 16px;
  font-weight: 500;
`

const ChiMakBtn = styled.div`
  background: linear-gradient(130deg, #ff7f1c 0%, #ff512b 100%);
  width: 160px;
  height: 55px;
  border-radius: 8px;
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 6px;
  cursor: pointer;
`

const ShareBtn = styled.div`
  width: 158px;
  height: 53px;
  border-radius: 8px;
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 6px;
  cursor: pointer;
  background-color: ${palette.BEA_WHITE};
  border: 1px solid ${palette.BEA_MAIN_600};
`

const ImageContainer = styled.div`
  width: ${({ search }) => (search ? '30%' : '100%')};
  transition: all 300ms linear;
`
const DescriptionTransit = styled.div`
  width: 100%;

  height: 90px;
  transform: ${({ search }) => (search ? 'translate(35%, -325%)' : 'none')};
  transition: all 300ms linear;
`

const DescriptionContainer = styled.div`
  width: 100%;
  margin: 0px 16px;
  border-bottom: 1px solid ${palette.BEA_MAIN_800};
`

const StatContainer = styled.div`
  width: 100%;
`

const GradationContainer = styled.div`
  width: 100%;
  height: 116px;
  padding: 16px 10px;
  background: linear-gradient(180deg, #fff 0%, #ffe2cb 50%, #ff6f00 100%);
`

const QuotationContainer = styled.div`
  width: 100%;
  height: 60px;
`

const PairingContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  overflow-x: scroll;
`

const EachPairing = styled.div`
  width: 150px;
  height: 205px;
  border-radius: 20px;
  border: 1px solid ${palette.BEA_NEU_200};
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
`

export default Index

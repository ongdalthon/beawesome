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

export const getStaticPaths = async () => {
  const PRODUCT_TB = db.PRODUCT_TB

  const product = await PRODUCT_TB.findAll({
    attributes: ['PR_ID_PK', 'PR_NAME'],
  })

  const paths = product?.map((item) => ({
    params: { id: item.dataValues.PR_ID_PK.toString() },
  }))

  console.log(paths)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const param = {
    PR_ID: params.id,
  }
  const res = await axios
    .get(`/api/product_info`, { params: param })
    .catch((err) => console.error(err))

  const data = res?.data?.product

  // Pass data to the page via props
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
    revalidate: 10,
  }
}

const Index = ({ data }) => {
  return (
    <Flex>
      <Flex direction="row" justify="space-between">
        <Link href={'/'} style={{ textDecoration: 'none' }}>
          <Image src={'/logo.svg'} alt="logo" width={95} height={43} />
        </Link>
        <Image src={'/search.svg'} alt="search" width={24} height={24} />
      </Flex>
      <Space height={'12px'} />
      <Flex>
        <ImageContainer>
          <NextImage src={data?.PR_IMAGE} />
        </ImageContainer>
        <DescriptionContainer>
          <Flex align="start">
            <Flex direction="row" justify="space-between">
              <Text text={data?.PR_NAME} font="Spoqa" size={20} weight={700} />
              <Image src={'/share.svg'} width={24} height={24} alt="share" />
            </Flex>
            <Space height={'6px'} />
            <Text
              text={data?.PR_COMPANY}
              font="Spoqa"
              size={14}
              color={palette.BEA_NEU_700}
              weight={400}
            />
            <Space height={'16px'} />
            <Text
              text={`${data?.PR_PRICE} 원`}
              font="Spoqa"
              size={18}
              color={palette.BEA_BLACK}
              weight={500}
            />
          </Flex>
          <Space height={'24px'} />
          <Flex direction="row" justify="start" gap={8}>
            {data?.PR_TAG.map((el) => (
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
            <DetailStat label={'도수'} data={data?.PR_ALC} />
            <DetailStat
              label={'논알콜여부'}
              data={data?.PR_NON ? 'YES' : 'NO'}
            />
            <DetailStat label={'사이즈'} data={'330ML'} end={true} />
          </Flex>
        </StatContainer>
        <GradationContainer />
        <NextImage src={data?.PR_BACKGROUND} />
        <Space height={'12px'} />
        <QuotationContainer>
          <Flex direction="row">
            <Flex justify="start" width="auto">
              <Text text={'“'} size={48} />
            </Flex>
            <Flex width="auto">
              <Text text={data?.PR_DES} size={24} />
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
              {data?.PR_PARING?.map((el) => (
                <EachPairing key={uuidv4()} url={el.url} />
              ))}
              {data?.PR_PARING?.map((el) => (
                <EachPairing key={uuidv4()} url={el.url} />
              ))}
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="row">
          <NextImage alt="shareChicken" src={'/shareChicken.svg'} />
          <NextImage alt="shareKakao" src={'/shareKakao.png'} />
        </Flex>
      </Flex>
    </Flex>
  )
}

const ImageContainer = styled.div`
  width: 100%;
  margin: 0px 32px;
`

const DescriptionContainer = styled.div`
  width: 100%;
  margin: 0px 16px;
  border-bottom: 1px solid ${palette.BEA_MAIN_800};c
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

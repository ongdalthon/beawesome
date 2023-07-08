import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import useSWR from 'swr'
import { Flex } from '~/@components/atoms/Flex'
import Image from 'next/image'
import NextImage from '~/@components/molecules/ImageWrapper'
import { styled } from 'styled-components'
import { Space } from '~/@components/atoms/Space'
import { Text } from '~/@components/atoms/Text'
import { palette } from '~/@styles/palette'

const Index = () => {
  const { id } = useRouter().query

  const fetcher = async (url) => {
    const params = {
      PR_ID: id,
    }
    return await axios.get(url, { params })
  }

  const { data } = useSWR(() => (id ? '/api/product_info' : null), fetcher)
  const product = data?.data?.product

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <Flex>
      <Flex direction="row" justify="space-between">
        <Image src={'/logo.svg'} alt="logo" width={95} height={43} />
        <Image src={'/search.svg'} alt="search" width={24} height={24} />
      </Flex>
      <Space height={'12px'} />
      <Flex>
        <ImageContainer>
          <NextImage src={product?.PR_IMAGE} />
        </ImageContainer>
        <DescriptionContainer>
          <Flex align="start">
            <Flex direction="row" justify="space-between">
              <Text
                text={product?.PR_NAME}
                font="Spoqa"
                size={20}
                weight={700}
              />
              <Image src={'/share.svg'} width={24} height={24} alt="share" />
            </Flex>
            <Space height={'6px'} />
            <Text
              text={product?.PR_COMPANY}
              font="Spoqa"
              size={14}
              color={palette.BEA_NEU_700}
              weight={400}
            />
            <Space height={'16px'} />
            <Text
              text={`${product?.PR_PRICE} 원`}
              font="Spoqa"
              size={18}
              color={palette.BEA_BLACK}
              weight={500}
            />
          </Flex>
        </DescriptionContainer>
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
`

export default Index

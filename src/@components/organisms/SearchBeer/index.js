import React, { useState } from 'react'
import { styled } from 'styled-components'
import Input from '~/@components/molecules/Input'
import { v4 as uuidv4 } from 'uuid'
import { Text } from '~/@components/atoms/Text'
import Hangul from 'hangul-js'
import Link from 'next/link'
import { palette } from '~/@styles/palette'
import { Flex } from '~/@components/atoms/Flex'
import { Space } from '~/@components/atoms/Space'
import { useRouter } from 'next/router'

const SearchBeer = ({ state, setState, data }) => {
  const filteredList = data
    ? data.filter((el) => Hangul.search(el.PR_NAME, state) === 0)
    : ''
  const [isClicked, setIsClicked] = useState(false)
  const router = useRouter()
  const goToDetail = (id) => {
    router.push(`/${id}`)
  }

  return (
    <SearchBeerContainer>
      <Input
        state={state}
        setState={setState}
        setFocus={setIsClicked}
        focus={isClicked}
      />
      <ResultContainer isClicked={isClicked}>
        {isClicked ? (
          <Flex gap={8} align="start">
            {filteredList?.length !== 0 ? (
              filteredList?.map((el) => (
                <Link
                  href={`/${el.PR_ID_PK}`}
                  key={uuidv4()}
                  style={{ textDecoration: 'none', width: '100%' }}
                  onMouseDown={() => {
                    goToDetail(el.PR_ID_PK)
                  }}
                >
                  <EachResultContainer>
                    <Text
                      text={el.PR_NAME}
                      cursor="pointer"
                      font="Spoqa"
                      size={14}
                      color={palette.BEA_NEU_500}
                    />
                  </EachResultContainer>
                </Link>
              ))
            ) : (
              <EachResultContainer>
                <Text text={'검색 결과가 없습니다'} cursor="pointer" />
              </EachResultContainer>
            )}
          </Flex>
        ) : (
          ''
        )}
      </ResultContainer>
    </SearchBeerContainer>
  )
}

const SearchBeerContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${palette.BEA_MAIN_50};
  border-radius: 8px;
`

const ResultContainer = styled.div`
  background-color: ${palette.BEA_MAIN_50};
  width: 100%;
  z-index: 2;
  position: absolute;
  padding: ${({ isClicked }) => (isClicked ? '8px' : '0px')};
`

const EachResultContainer = styled.div`
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${palette.BEA_MAIN_50};
  cursor: pointer;
`

export default SearchBeer

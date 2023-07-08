import React from 'react'
import { styled } from 'styled-components'
import Input from '~/@components/molecules/Input'
import { v4 as uuidv4 } from 'uuid'
import { Text } from '~/@components/atoms/Text'
import Hangul from 'hangul-js'
import Link from 'next/link'

const BeerList = ['카스', '곰표', '테라', '제주 맥주']

const SearchBeer = ({ state, setState }) => {
  const filteredList = BeerList.filter((el) => Hangul.search(el, state) === 0)

  return (
    <SearchBeerContainer>
      <Input state={state} setState={setState} />
      {state ? (
        <ResultContainer>
          {filteredList.length !== 0 ? (
            filteredList.map((el) => (
              <Link
                href={`/${el}`}
                key={uuidv4()}
                style={{ textDecoration: 'none' }}
              >
                <EachResultContainer>
                  <Text text={el} cursor="pointer" />
                </EachResultContainer>
              </Link>
            ))
          ) : (
            <EachResultContainer>
              <Text text={'검색 결과가 없습니다'} cursor="pointer" />
            </EachResultContainer>
          )}
        </ResultContainer>
      ) : (
        ''
      )}
    </SearchBeerContainer>
  )
}

const SearchBeerContainer = styled.div`
  width: 100%;
`

const ResultContainer = styled.div`
  width: 100%;
`

const EachResultContainer = styled.div`
  width: 100%;
  padding: 20px;
  cursor: pointer;
`

export default SearchBeer

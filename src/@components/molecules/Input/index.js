import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import { Flex } from '~/@components/atoms/Flex'
import { palette } from '~/@styles/palette'

const Input = ({ state, setState, setFocus, focus }) => {
  return (
    <InputContainer
      focus={focus}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <Flex direction="row">
        <StyledInput
          placeholder="자주 마시는 맥주를 검색해보세요"
          value={state}
          onChange={(e) => setState(e.target.value)}
        ></StyledInput>

        <Image src={'/search.svg'} width={24} height={24} alt="search" />
      </Flex>
    </InputContainer>
  )
}

const StyledLabel = styled.label``
const InputContainer = styled.div`
  background-color: ${palette.BEA_MAIN_50};
  border: 1px solid ${palette.BEA_MAIN_200};
  border-radius: ${({ focus }) => (focus ? '8px 8px 0px 0px' : '8px')};
  width: 100%;
  padding: 8px 16px;
`
const StyledInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  background-color: transparent;
  &::placeholder {
    font-family: Spoqa;
    color: ${palette.BEA_MAIN_600};
  }
`

export default Input

import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import { Flex } from '~/@components/atoms/Flex'
import { palette } from '~/@styles/palette'

const Input = ({ state, setState, id, text }) => {
  return (
    <StyledLabel for={id}>
      <InputContainer>
        <Flex direction="row">
          <StyledInput
            placeholder="자주 마시는 맥주를 검색해보세요"
            id={id}
            value={state}
            onChange={(e) => setState(e.target.value)}
          ></StyledInput>

          <Image src={'/search.svg'} width={24} height={24} alt="search" />
        </Flex>
      </InputContainer>
    </StyledLabel>
  )
}

const StyledLabel = styled.label``
const InputContainer = styled.div`
  background-color: ${palette.BEA_MAIN_50};
  border: 1px solid ${palette.BEA_MAIN_200};
  border-radius: 8px;
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

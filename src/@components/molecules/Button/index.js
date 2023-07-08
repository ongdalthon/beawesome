import styled from 'styled-components'
import { Children } from 'react'
import { Text } from '~/@components/atoms/Text'
import Image from 'next/image'
import { Flex } from '~/@components/atoms/Flex'

export const Button = ({
  padding = 0,
  text = '',
  border = 'none',
  backgroundColor = 'transparent',
  size = 18,
  color = 'black',
  radius = 1,
}) => {
  return (
    <StyledButton
      padding={padding}
      border={border}
      bgColor={backgroundColor}
      radius={radius}
    >
      <Flex direction="row" justify="space-between">
        <Text text={text} size={size} cursor="pointer" color={color} />
        <Image src={'/heart.svg'} width={24} height={24} alt="heart" />
      </Flex>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  width: 100%;
  cursor: pointer;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ radius }) => radius}px;
`

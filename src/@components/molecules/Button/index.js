import styled from 'styled-components'
import { Children } from 'react'
import { Text } from '~/@components/atoms/Text'

export const Button = ({
  padding = 0,
  text = '',
  border = 'none',
  backgroundColor = 'white',
  size = 18,
  radius = 10,
}) => {
  return (
    <StyledButton
      padding={padding}
      border={border}
      bgColor={backgroundColor}
      radius={radius}
    >
      <Text text={text} size={size} cursor="pointer" />
    </StyledButton>
  )
}

const StyledButton = styled.button`
  width: 100%;
  cursor: pointer;
  padding: ${({ padding }) => padding}px;
  border: ${({ border }) => border};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ radius }) => radius}px;
`

import styled from 'styled-components'
import { Children } from 'react'
import { Text } from '~/@components/atoms/Text'
import Image from 'next/image'
import { Flex } from '~/@components/atoms/Flex'
import { palette } from '~/@styles/palette'
import { useRouter } from 'next/router'

export const Button = ({
  padding = 0,
  text = '',
  border = 'none',
  backgroundColor = 'transparent',
  size = 18,
  color = 'black',
  radius = 1,
  onClick = undefined,
  isClicked = false,
}) => {
  const router = useRouter()
  const goRandomly = () => {
    router.push('/cass')
  }

  return (
    <StyledButton
      padding={padding}
      border={border}
      bgColor={backgroundColor}
      radius={radius}
      onClick={onClick ? () => onClick(!isClicked) : goRandomly}
      isClicked={isClicked}
    >
      <Flex direction="row" justify="space-between">
        <Text
          text={text}
          size={size}
          cursor="pointer"
          color={isClicked ? 'white' : color}
        />
        {isClicked ? (
          ''
        ) : (
          <Image src={'/heart.svg'} width={20} height={20} alt="heart" />
        )}
      </Flex>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  width: 100%;
  cursor: pointer;
  padding: ${({ padding }) => padding};
  border: ${({ border, isClicked }) =>
    isClicked ? `1px solid ${palette.BEA_SUB_700}` : border};
  background-color: ${({ bgColor, isClicked }) =>
    isClicked ? `${palette.BEA_SUB_700}` : bgColor};
  border-radius: ${({ radius }) => radius}px;
`

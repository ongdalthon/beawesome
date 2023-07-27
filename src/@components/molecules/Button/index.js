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
  width = '100%',
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
      width={width}
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

        <SearchBeerAnimation isClicked={isClicked}>
          <Image src={'/heart.svg'} width={24} height={24} alt="heart" />
        </SearchBeerAnimation>
      </Flex>
    </StyledButton>
  )
}

const SearchBeerAnimation = styled.div`
  transition: all 300ms;
  opacity: ${({ isClicked }) => (isClicked ? `0%` : `100%`)};
`

const StyledButton = styled.button`
  width: ${({ width }) => width};
  cursor: pointer;
  padding: ${({ padding }) => padding};
  border: ${({ border, isClicked }) =>
    isClicked ? `1px solid ${palette.BEA_SUB_700}` : border};
  background-color: ${({ bgColor, isClicked }) =>
    isClicked ? `${palette.BEA_SUB_700}` : bgColor};
  border-radius: ${({ radius }) => radius}px;
`

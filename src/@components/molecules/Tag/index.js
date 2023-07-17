import styled from 'styled-components'
import { Children } from 'react'
import { Text } from '~/@components/atoms/Text'
import Image from 'next/image'
import { Flex } from '~/@components/atoms/Flex'
import { palette } from '~/@styles/palette'
import { useRouter } from 'next/router'

export const Tag = ({
  padding = 0,
  text = '',
  width = '100%',
  border = 'none',
  backgroundColor = 'transparent',
  size = 18,
  color = 'black',
  weight = 500,
  radius = 1,
}) => {
  const router = useRouter()
  const goRandomly = () => {
    router.push('/cass')
  }

  return (
    <StyledTag
      width={width}
      padding={padding}
      border={border}
      bgColor={backgroundColor}
      radius={radius}
    >
      <Flex direction="row" justify="space-between">
        <Text
          text={text}
          weight={weight}
          size={size}
          cursor="pointer"
          color={color}
        />
      </Flex>
    </StyledTag>
  )
}

const StyledTag = styled.div`
  width: ${({ width }) => width};

  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius}px;
`

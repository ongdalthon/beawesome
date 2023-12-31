import styled from 'styled-components'

export const Flex = ({
  children,
  display = 'flex',
  direction = 'column',
  justify = 'center',
  align = 'center',
  gap = 0,
  width = '100%',
  height = 'auto',
  wrap = 'nowrap',
  overflow = 'visible',
}) => {
  return (
    <FlexBase
      display={display}
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      width={width}
      height={height}
      wrap={wrap}
      overflow={overflow}
    >
      {children}
    </FlexBase>
  )
}

const FlexBase = styled.div`
  display: ${({ display }) => display};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => `${gap}px`};
  flex-wrap: ${({ wrap }) => wrap};
  overflow: ${({ overflow }) => overflow};
`

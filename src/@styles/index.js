import { css } from 'styled-components'

export const commonStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  *::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`

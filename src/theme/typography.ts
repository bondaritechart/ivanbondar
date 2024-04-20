import { css } from 'styled-components'
import { smallDevice } from 'theme/index'

export const heading1 = css`
  font-weight: 600;
  font-size: 6.4rem;
  line-height: 1.2;
  ${smallDevice} {
    font-size: 4.8rem;
  }
`
export const heading2 = css`
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 1.2;
`
export const heading3 = css`
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 1.5;
`

export const body = css`
  font-size: 1.8rem;
  line-height: 1.5;
`

export const small = css`
  font-size: 1.6rem;
  line-height: normal;
`

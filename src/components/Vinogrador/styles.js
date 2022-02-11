import styled from 'styled-components'

import { VinogradorWrap } from '../VinogradList/style'

export const VinorgadItem = styled.a`
  color: #4a4a4a;
  ${VinogradorWrap}:hover & {
    color: #159bae;
  }
`
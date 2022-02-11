import loadingImg from '../../../img/loading.gif'

import { LoadingWrap } from './styles'

export default () => (
  <LoadingWrap>
    <img src={`./${loadingImg}`} />
  </LoadingWrap>
)
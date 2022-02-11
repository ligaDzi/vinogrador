import { VinorgadItem } from './styles'


export default ({ name, href }) => (
    <VinorgadItem href={ href }  target="_blank">{ name }</VinorgadItem>
)
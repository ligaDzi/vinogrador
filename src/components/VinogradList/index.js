import Vinogrador from '../Vinogrador'
import AddPersonForm from '../AddPersonForm'
import DelIcon from '../../svg/DelIcon'
import GrapeIcon from '../../svg/GrapeIcon'


import { VinogradContainer, VinogradList, VinogradorWrap, HeaderMain, Number } from './style'

export default ({ persons, addNewPerson, deletePerson }) => {

    const showList = () => (
        persons.map((item, i) => (
            <VinogradorWrap key={item.id}>
                <Number>{++i}</Number>
                <button onClick={ () => deletePerson(item.id)}>
                    <DelIcon />
                </button>
                <Vinogrador
                    name={item.name}
                    href={item.href}
                />  
            </VinogradorWrap>
        ))
    )

    return (
        <VinogradContainer>
            <HeaderMain>
                Блоги виноградарей
                <GrapeIcon />
            </HeaderMain>
            <VinogradList>
                {showList()}
            </VinogradList>
            <AddPersonForm handleAddPerson={addNewPerson} />
        </VinogradContainer>
    )
}
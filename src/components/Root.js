import { useState, useEffect } from 'react'
import firebase from 'firebase'

import VinogradList from './VinogradList'
import Loading from './common/Loading'

import { fbDataToArray } from '../utils'


export default () => {
    const [persons, setPersons] = useState(null)

    useEffect(() => {
      async function getPersons() {
        
        const ref = await firebase.database().ref('persons')
        await ref.once('value', snapshot => {
          const data = fbDataToArray(snapshot.val())
          setPersons(data)
        }) 
      }
      
      getPersons()
    }, [])


    const addNewPerson = ({ name, href }) => {
      
      firebase.database().ref(`persons`)
        .push({ name, href })
        .then((data) => {
          // МЕТОД push() ВОЗВРАЩАЕТ ДОБАВЛЕННУЮ ЗАПИСЬ
          // СПОМОЩЬЮ СВОИСТВА key МОЖНО УЗНАТЬ id НОВОЙ ЗАПИСИ
          const personAdd = { id: data.key, name, href }

          setPersons([ ...persons, personAdd ])
        })
        .catch(err => console.error('Не удалось добавить запись в БД'))
    }


    const deletePerson = id => {

      firebase.database().ref(`persons/${id}`)
        .remove()
        .then(() => setPersons(persons.filter(per => per.id != id))) 
        .catch(err => console.error('При удалении записи из БД произошла ошибка')) 
    }


    if (!persons) return <Loading />    

    return (
      <div>
        <VinogradList persons={ persons } addNewPerson={ addNewPerson } deletePerson={ deletePerson } />
      </div>
    )
}


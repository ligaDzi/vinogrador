import { useState, useEffect } from 'react'
import firebase from 'firebase'

export default () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    async function getPersons() {

      const ref = await firebase.database().ref('persons')
      await ref.on('value', snapshot => setPersons(snapshot.val())) 
    }
    
    getPersons()
  }, [])

  const renderPersonList = () => {
    return (
      <ul>
        {
          persons?.map((per, i) => (
            <li key={per.id}>{++i}) {per.name}</li>
          ))
        }
      </ul>
    )
  }

  return (
    <div>
      { renderPersonList() }
    </div>
  )
}
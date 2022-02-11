// ЧТО БЫ НАПОЛНИТЬ БД firebase:
// ИМПОРТИРОВАТЬ ЭТОТ ФАЙЛ В Root.js, 
// ЗАПУСТИТЬ ПРИЛОЖЕНИЕ И В БРАУЗЕРЕ ВЫЗВАТЬ МЕТОД window.runMigration()
import firebase from 'firebase'
import { persons as personMock } from './fixtures.json'

function saveEventsToFB() {
  const personsRef = firebase.database().ref('persons')
  personMock.forEach(per => {
    personsRef.push(per)
  })
}

window.runMigration = function() {
  firebase.database().ref('persons')
    .once('value')
    .then(data => {
      if (!data.val()) {
        saveEventsToFB()
      }
    })
}
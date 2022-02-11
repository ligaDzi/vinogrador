import { Form, ErrorMessage, Formik, Field } from 'formik'

import { PersonShema } from './validationShema'
import ErrorField from '../common/ErrorField'
import AddIcon from '../../svg/AddIcon'

import { FormBlock, InputFormBlock, AddPersonBtn } from './styles'

export default ({ handleAddPerson }) => {

  return (
    <FormBlock>    
      <Formik
        //инициализируем значения input-ов
        initialValues={{ name: '', href: '' }}

        //подключаем схему валидации
        validationSchema={ PersonShema }  
        
        //определяем, что будет происходить при вызове onsubmit
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleAddPerson(values)

          //setSubmitting(false) - завершение отправки данных на сервер
          setSubmitting(false)

          resetForm()
        }}
      >        
        { ({ isSubmitting }) => (

          <Form className='form-body'>   
            <InputFormBlock>
              <label htmlFor='name'>Имя:</label> 
              <Field type="text" name="name" htmlFor='name' />
              <ErrorMessage name="name" component={ ErrorField } />
            </InputFormBlock>        

            <InputFormBlock>
              <label htmlFor='href'>Адрес ссылки:</label> 
              <Field type="text" name="href" htmlFor='href' />
              <ErrorMessage name="href" component={ ErrorField } />
            </InputFormBlock>
              
            <AddPersonBtn type="submit" disabled={isSubmitting}>
              <AddIcon />
              Добавить
            </AddPersonBtn>
          </Form>
        )}
      </Formik>
    </FormBlock>
  )
}
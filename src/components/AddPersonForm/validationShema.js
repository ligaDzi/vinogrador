import * as Yup from 'yup'

export const PersonShema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Слишком короткое имя')
    .max(50, 'Слишком длинное имя')
    .required('Введите имя'),

  href: Yup.string()
    .url('Введите адрес ссылки')
    .required('Введите адрес ссылки')
})
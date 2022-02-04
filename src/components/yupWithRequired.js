import * as Yup from 'yup';
const objYupWith = {  
  firstName: Yup.string()
  .max(15, 'Must be 15 characters or less')
  .max(15, 'Must be 15 characters or less')
  .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 charaters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
  }

  export default objYupWith;
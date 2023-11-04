import * as yup from 'yup';

// Schema for email and password
const schema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email') // Validate as an email
    .required('Email is required'), // Mark the field as required
  password: yup
    .string()
    .required('Password is required') // Mark the field as required
    .min(8, 'Password must be at least 8 characters') // Minimum length
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
});

export default schema;

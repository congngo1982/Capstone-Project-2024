import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  sub: Yup.string().required().label("Subject"),
  msg: Yup.string().required().min(20).label("Message"),
});


export const loginSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  // password: Yup.string().required().min(6).label("Password"),
});


export const registerSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
});


export const blogSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  subject: Yup.string().required().min(10).label("Subject"),
  msg: Yup.string().required().min(20).label("Message"),
});



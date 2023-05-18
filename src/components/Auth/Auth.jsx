import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { loginUserThunkCreator } from '../../redux/auth-reducer'

const AuthForm = (props) => {

  return (
      <form onSubmit={props.handleSubmit}>
        <div><Field name="login" component="input" type={"text"} /></div>
        <div><Field name="password" component="input" type={"password"} autocomplete={"on"} /></div>
        <div><Field name="rememberMe" component="input" type={"checkbox"} />Запомнить меня</div>
        <input type="submit" />
      </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(AuthForm)

const Auth = () => {

  const onSubmit = (formData) => {
    return loginUserThunkCreator(formData)
  }

  return (
    <div>
      <h1>Привет, придётся войти в учётку.....</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, { loginUserThunkCreator })(Auth);


// import { useForm } from "react-hook-form";
// import { connect } from "react-redux";
// import { loginUserThunkCreator } from '../../redux/auth-reducer';

// // import updateAction from "./actions";

// export default function Auth(props) {
//   const { register, handleSubmit, setValue } = useForm({
//     defaultValues: {
//       Login: '',
//       Password: '',
//       RememberMe: '',
//     }
//   });
//   // Submit your data into Redux store
//   const onSubmit = data => props.loginUserThunkCreator(data);
//   debugger;
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div><input {...register("Login", { required: true, maxLength: 15 })}  type="text" /></div>
//       <div><input {...register("Password", { required: true})} type="password"  autocomplete="on" /></div>
//       <div><input {...register("RememberMe", { checked: true/false })} type="checkbox" />Запомнить меня</div>
//       <input type="submit" />
//     </form>
//   );
// }

// // Connect your component with redux
// connect(({ Login, Password, RememberMe }) => ({ Login, Password, RememberMe }), loginUserThunkCreator)(Auth);

// export default connect(mapStateToProps, { getUsersThunkCreator, followUsersThunkCreator, unfollowUsersThunkCreator })(UsersContainer);


// export default function Auth() {
  
//   const formLogin = {
//     Login: {},
//     Password: '',
//     RememberMe: {},
//   }

//   const { register, handleSubmit } = useForm(formLogin);
//   const onSubmit = data => console.log(data);
   
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div><input {...register("Login", { required: true, maxLength: 15 })}  type="text" /></div>
//       <div><input {...register("Password", { required: true})} type="password"  autocomplete="on" /></div>
//       <div><input {...register("RememberMe", { checked: true/false })} type="checkbox" />Запомнить меня</div>
//       <Controller
//         name="checkbox"
//         control={control}
//         rules={{ required: true }}
//         render={({ field }) => <Checkbox {...field} />}
//       />
//       <input type="submit" />
//     </form>
//   );
// }
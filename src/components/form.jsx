import React from 'react'
import { useForm } from 'react-hook-form'
import './form.css'

export const Form = () => {
  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  console.log(formState)

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='username'>Usuario: </label>
      <input
        {...register('username', {
          required: true,
          pattern: {
            value: /^[a-zA-Z][a-zA-Z0-9_]{2,}$/,
            message:
              'El nombre de usuario debe comenzar con una letra y solo puede contener letras (mayúsculas y minúsculas), dígitos y guiones bajos, con una longitud mínima de 3 caracteres'
          }
        })}
        type='text'
        id='username'
      />
      {formState.errors.username ? (
        <p>{formState.errors.username.message}</p>
      ) : null}
      <label htmlFor='email'>Email: </label>
      <input
        {...register('email', {
          required: true,
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Ingrese un correo electrónico válido'
          }
        })}
        type='email'
        id='email'
      />
      {formState.errors.email ? <p>{formState.errors.email.message}</p> : null}
      <label htmlFor='password'>Contraseña: </label>
      <input
        {...register('password', {
          required: true,
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            message:
              'Debe contener al menos un dígito, una letra minúscula, una letra mayúscula y al menos una letra, además de una longitud mínima de 8 caracteres'
          }
        })}
        type='password'
        id='password'
      />
      {formState.errors.password ? (
        <p>{formState.errors.password.message}</p>
      ) : null}
      <button disabled={!formState.isDirty} type='submit'>
        Enviar
      </button>
    </form>
  )
}

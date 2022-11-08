import React from 'react'

const SignUpExitoso = ({user}) => {
  return (
    <div>
        Has sido registrado exitosamente!!
        {user.nombre}
        {user.apellido}
        {user.email}
        {user.numero}
        {user.password}
    </div>
  )
}

export default SignUpExitoso
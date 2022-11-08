import React,{useState} from 'react'
import SignUpExitoso from './SignUpExitoso'

const FormPractica = () => {

    const [user, setUser] = useState({
        nombre:"",
        apellido:"",
        email:"",
        numero:"",
        password:""
    })

    const [component, setComponent] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.nombre.length > 2 && user.password.length > 5){
            setComponent("SignUp Exitoso")
        }
    }
    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input type="text" onChange={(e)=>setUser({...user, nombre: e.target.value})}/>
            <label>Apellido: </label>
            <input type="text" onChange={(e)=>setUser({...user, apellido: e.target.value})} />
            <label>Email: </label>
            <input type="text" onChange={(e)=>setUser({...user, email: e.target.value})}/>
            <label>Numero:</label>
            <input type="number" onChange={(e)=>setUser({...user, numero: e.target.value})}/>
            <label>Password: </label>
            <input type="password" onChange={(e)=>setUser({...user, password: e.target.value})}/>
            <button>SIGN UP</button>
            {component==="SignUp Exitoso" ? <SignUpExitoso user={user}/> : null}
        </form>
    </div>
  )
}

export default FormPractica
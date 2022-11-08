// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// Tiene que tener un estado para contabilizar lo que voy comprando.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto 
// Item.
// PROPS: App deberá pasar por props lo necesario a sus componentes internos.
import Cabecera from "./Cabecera"
import Listado from "./Listado"
import React, {useState} from "react"
import FormPractica from "./FormPractica"


function App() {

  // const [total, setTotal] = useState(0)

  // const aumentarTotal = () => {
  //   setTotal(total + 1)
  // }

  // return (
  //   <div>
  //     <Cabecera props = {total}/>
  //     <Listado props = {aumentarTotal}/>
  //   </div>
  // )

  return (
    <div>
      <FormPractica/>
    </div>
  )

}

export default App


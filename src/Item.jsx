// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)

//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import React,{useState} from 'react'

const Item = ({productos, props}) => {

  const [stock, setStock] = useState(productos.stock)

  const purchase = () => {
    setStock(stock - 1)
    props()
  }
  
  return (
    <div className='card' key={productos.id}>
    <h3>{productos.producto.nombre}</h3>
    <p>{productos.producto.descripcion}</p>
    <h5>Stock Disponible: {stock <= 0 ? <span>AGOTADO</span> : stock } </h5>
    <button disabled={stock===0} onClick={purchase}>COMPRAR</button>
    </div>
  )
}

export default Item
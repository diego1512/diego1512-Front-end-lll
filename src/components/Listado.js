import React from 'react'
import Item from './Item'
import JSON from'./data.json'

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado(props) {

  const listadoData=JSON.map(
    (info) =>{
      return(
      <><td>{info.id}</td>
      <td>{info.producto}</td>
      <td>{info.nombre}</td>
      <td>{info.descripcion}</td></>
      )
    }
  )

  return (
    <div className='container'>
      {
        <><table>
          <thead>
            <tr>
              <th>SR.NO</th>
              <th>Name</th>
              <th>city</th>
            </tr>
          </thead>
          <tbody>
            {listadoData}
          </tbody>
        </table>
        <Item agregarProducto={props.agregarProducto} /></>
      }
    </div>
  )
}

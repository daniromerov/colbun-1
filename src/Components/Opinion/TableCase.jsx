import React from "react";


function TableCase() {
  
  return (
    <div className="App">
      
        <div className ="container-table">
          <p className ="title-cases">Casos</p>
    <table class="table">
      <thead>
        <tr>
      
          <th scope="col">Fecha</th>
          <th scope="col">Nombre</th>
          <th scope="col">Tema</th>
          <th scope="col">Area Cliente</th>
          <th scope="col">Area Relacionada</th>
          <th scope="col">Opiniones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
   
          <td>09/10/2020</td>
          <td>Proyecto Fotovoltaico</td>
          <td>Proyectos; Ambiental; Regulación</td>
          <td>Gerencia de Construcción</td>
          <td>Gerencia de Ingeniería; Gerenciad de Medio Ambiente; Gerencia de Negocios</td>
          <td> </td>
        </tr>
        
       
      </tbody>
    </table>
    </div>
 

    </div>
  );
}
export default TableCase;
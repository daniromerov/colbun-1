import React from "react";



function ResultsCases() {
  let [searchTerm, setSearchTerm] = React.useState("");
  let people = [
    { fecha: "09/10/2020", name: "Proyecto Fotovoltaico", tema: "Proyectos; Ambiental; Regulación", areac: "Gerencia de Construcción", arear:"Gerencia de Ingeniería; Gerenciad de Medio Ambiente; Gerencia de Negocios", opiniones:""}, 
    { fecha: "05/04/2020", name: "Contrato de Suministro Eléctrico", tema: "", areac: "Gerencia Comercial", opiniones:""},
    { fecha: "20/05/2020", name: "Proyecto Línea de Transmisión", tema: "Proyectos; Regulación", areac: "Gerencia de Proyectos de Transmisión", arear:"Gerencia de Ingeniería", opiniones:""},
    { fecha: "13/03/2020", name: "Demanda con Cliente", tema: "", areac: "Gerencia de Negocios", arear:"Gerencia Comercial, Gerencia de Finanzas y Administración", opiniones:""},
    { fecha: "10/02/2020", name: "Fiscalización de Autoridad", tema: "", areac: "Gerencia de Construcción; Gerencia de Medio Ambiente", arear:"Gerencia de Transmisión", opiniones:""},
    { fecha: "18/01/2020", name: "Nuevo Reglamento Eléctrico", tema: "", areac: "Gerencia de Regulación", arear: "Gerencia de Negocios; Gerencia de Control de Gestión y Riesgos; Gerencia General", opiniones:""},
    { fecha: "30/10/2020", name: "Demanda Laboral", tema: "", areac: "Gerencia de Organización y Personas", arear: "Gerencia de Generación", opiniones:""},
    { fecha: "12/10/2020", name: "Convenio de Colaboración ONG", tema: "", areac: "Gerencia de Asuntos Públicos", arear: "Gerencia de Medio Ambiente", opiniones:""},
   ];

  const handleChange = e => {
e.preventDefault()
    setSearchTerm(e.target.value);

 };
 
 if(searchTerm.length > 0) {
   people = people.filter((i) => {
     return i.name.toLowerCase().match(searchTerm); 
   })
 }
  
  return (
    
    <div className="container-input-search">
      <input class = "input-search"
        type="text"
        placeholder="Buscar"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className ="container-table1">
        
      <table class="table">
       <thead>
        <tr>
         
          <th scope="col">Fecha</th>
          <th scope="col">Nombre</th>
          <th scope="col">Tema</th>
           <th scope="col">Area Cliente</th>
          <th scope="col">Area Relacionada</th>
          <th scope="col">Responsable</th>
         
        </tr>
      </thead>
      {people.map(item => {
        return (
            <tbody>
         
        <tr>
         
          <td>{item.fecha}</td>
          <td>{item.name}</td>
          <td>{item.tema}</td>
          <td>{item.areac}</td>
          <td>{item.arear}</td>
          <td>{item.opiniones}</td>
         </tr>
     
      </tbody>
       )
       } )}
    </table>
    </div>
 
    </div>
  ); 

}



export default ResultsCases;

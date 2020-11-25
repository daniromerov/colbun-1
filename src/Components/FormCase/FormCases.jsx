import React, { Fragment, useState } from "react";
import { firebase } from '../../firebase'; 
import PrincipalLogo from "../Logo";
import "./FormCases.css";
import SearcherBar from "../FormCase/SearcherBar";
// npm install --save-dev @iconify/react @iconify-icons/bi
import { Icon } from "@iconify/react";
import plusIcon from "@iconify-icons/bi/plus";
// import Button from "react-bootstrap/Button";

const FormCases = () => {
  const [selectOption, setSelect] = useState("")
  const  [selectOption1, setSelect1] = useState("")
  const  [selectOption2, setSelect2] = useState("")
  const  [selectOption3, setSelect3] = useState("")
  const  [selectOption4, setSelect4] = useState("")

  const sendToFirebase = async (e) => {
    e.preventDefault();

    try {

        const db = firebase.firestore();
        console.log(db)
        let peticion = selectOption1.map(options => {
            return (
                options.reduce((result, item) => {
                    return `${result}${item}`
                })
            )
        })
       console.log(peticion)
        const options = {
            Fecha: Date.now(),
            Nombre: peticion,
            AreaC: selectOption1
            
        };
        console.log(options);
        await db.collection('AreaC').add(options);

    } catch (error) {
        console.log(error);
    }

  return (
    <Fragment>
      <PrincipalLogo />
      <SearcherBar />

      <div>
        <p class="text">
          <Icon icon={plusIcon} />
          Ingresa un nuevo caso
        </p>
      </div>
      <div class="form-back">
        <form class="form">
          <div class="container m-2">
            <select class="custom-select">
              <option selected>Fecha</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="container m-2">
            <input class="form-control" type="text" placeholder="Nombre" />
          </div>
          <div class="container m-2">
            <select class="custom-select" onChange={(e)=>{
              const selectedTema =e.target.value; 
              setSelect(selectedTema)
            }}>
              <option selected>Tema</option>
              <option value="Corporativos">Corporativos</option>
              <option value="Litigios">Litigios</option>
              <option value="Contratos">Contratos</option>
              <option value="Opiniones Legales y Asesoria">Opiniones Legales y Asesoría</option>
              <option value="Proyectos">Proyectos</option>
              <option value="Regulaciones">Regulaciones</option>
              <option value="Contingencias">Contingencias</option>
            </select>
            {selectOption}
          </div>
          <div class="container m-2">
            <select class="custom-select" onChange={(e)=>{
              const selectedTema1 =e.target.value; 
              setSelect1(selectedTema1)
            }}>
              <option selected>Area cliente</option>
              <option value="Gerencias de Energías Renovables y Proyectos">
                Gerencias de Energías Renovables y Proyectos
              </option>
              <option value="Gerencia de Operaciones">Gerencia de Operaciones</option>
              <option value="Gerencia Legal">Gerencia Legal</option>
              <option value="Gerencia de Contabilidad">Gerencia de Contabilidad</option>
              <option value="Gerencia de negocios">Gerencia de Negocias</option>
              <option value="Gerencia de Proyectos">Gerencia de Proyectos</option>
              <option value="Gerencia de Finanzas">Gerencia de Finanzas</option>
              <option value="Gerencia de Comunicaciones">Gerencia de Comunicaciones</option>
            </select>
            {selectOption1}
          </div>
          <div class="container m-2">
            <select class="custom-select" onChange={(e)=>{
              const selectedTema2 =e.target.value; 
              setSelect2(selectedTema2)
            }}>
              <option selected>Entregable</option>
              <option value="Opinion Legal">Opinión legal</option>
              <option value="Informe">Informe</option>
              <option value="Obtencion de permiso">Obtención de permiso</option>
              <option value="Sentencia de cobro">Sentencia de cobro</option>
              <option value="Defensa legal">Defensa legal</option>
            </select>
            {selectOption2}
          </div>
          <div class="container m-2">
            <select class="custom-select" onChange={(e)=>{
              const selectedTema3 =e.target.value; 
              setSelect3(selectedTema3)
            }}>
              <option selected>Opiniones</option>
              <option value="Legal Interno">Legal Interno</option>
              <option value="Legal externo">Legal Externo</option>
              <option value="Legal Tecnica">Técnica</option>
              <option value="Contable">Contable</option>
            </select>
            {selectOption3}
          </div>
          <div class="container m-2">
            <select class="custom-select" onChange={(e)=>{
              const selectedTema4 =e.target.value; 
              setSelect4(selectedTema4)
            }}>
              <option selected>Consideraciones</option>
              <option value="Ambiental">Ambiental</option>
              <option value="Politica">Política</option>
              <option value="Tributaria">Tributaria</option>
              <option value="Economica">Económica</option>
              <option value="Comunitaria">Comunitaria</option>
            </select>
            {selectOption4}
          </div>
          <div class="container m-2">
            <select class="custom-select">
              <option selected>Temas relacionados</option>
            </select>
          </div>

          <button as="input" size="lg" type="submit" variant="success" value="Crear" onClick = {sendToFirebase} />

        </form>
      </div>
    </Fragment>
  );
}
}

export default FormCases;

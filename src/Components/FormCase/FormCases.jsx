import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
//import { firebase } from '../../firebase';
import { Link } from 'react-router-dom';
//import PrincipalLogo from "../Logo";
import "./FormCases.css";
//import SearcherBar from "../FormCase/SearcherBar";
// npm install --save-dev @iconify/react @iconify-icons/bi
import { Icon } from "@iconify/react";
import plusIcon from "@iconify-icons/bi/plus";
import TableCase from "../Opinion/TableCase";
// import Button from "react-bootstrap/Button";
//Components
import NavBar from "../Menu/Menu";
import logo from "../../img/logo.png";
//import avatar from "../../img/Home/avatar-01.png";

const FormCases = () => {

 
  //   console.log('enviando datos...')

  //   if (selectOption1.length === 0) {
  //     return
  // }

  //   try {

  //       const db = firebase.firestore();
  
  //       let peticion = selectOption1.map(options => {
  //           return (
  //               options.reduce((result, item) => {
  //                   return `${result}${item}`
  //               })
  //           )
          
  //       })

  //    console.log(peticion)
  //       const options = {
  //           Fecha: Date.now(),
  //           AreaC: peticion
    
            
  //       };
  //       console.log(options);
  //       await db.collection('AreaC').add(options);

  //   } catch (error) {
  //       console.log(error);
  //   }
  // }

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      console.log(data) 
      }
  
  return (
    <Fragment>
    
      <header className="header-desktop">
            <NavBar></NavBar>
            <div className="logo">              
                <img src={logo} />              
            </div>
            <div className="section__content section__content--p30">
              <div className="container-fluid">
                <div className="header-wrap">
                 
              
                </div>
              </div>
            </div>
          </header>
    
         <div>
        <p class="text">
          <Icon icon={plusIcon} />
          Ingresa un nuevo caso
        </p>
      </div>
      <div class="form-back">
        <form class="form" onSubmit={handleSubmit(onSubmit)}>
          <div class="container m-2">
            <select name="date" class="custom-select" ref={register} >
              <option selected>Fecha</option>
              <option value="1">27/11/2020</option>
             
            </select>
          </div>
          <div class="container m-2">
            <input name="name" class="form-control" type="text" placeholder="Nombre" ref={register} />
          </div>
          <div class="container m-2">
            <select name="tema" class="custom-select" ref={register} >
              <option selected>Tema</option>
              <option value="Corporativos">Corporativos</option>
              <option value="Litigios">Litigios</option>
              <option value="Contratos">Contratos</option>
              <option value="Opiniones Legales y Asesoria">Opiniones Legales y Asesoría</option>
              <option value="Proyectos">Proyectos</option>
              <option value="Regulaciones">Regulaciones</option>
              <option value="Contingencias">Contingencias</option>
            </select>
           
          </div>
          <div class="container m-2">
            <select name="areaC" class="custom-select" ref={register} >
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
 
          </div>
          <div class="container m-2">
            <select name="entregable" class="custom-select" ref={register} >
              <option selected>Entregable</option>
              <option value="Opinion Legal">Opinión legal</option>
              <option value="Informe">Informe</option>
              <option value="Obtencion de permiso">Obtención de permiso</option>
              <option value="Sentencia de cobro">Sentencia de cobro</option>
              <option value="Defensa legal">Defensa legal</option>
            </select>
          
          </div>
          <div class="container m-2">
            <select name="opinions" class="custom-select" ref={register} >
              <option selected>Opiniones</option>
              <option value="Legal Interno">Legal Interno</option>
              <option value="Legal externo">Legal Externo</option>
              <option value="Legal Tecnica">Técnica</option>
              <option value="Contable">Contable</option>
            </select>
          
          </div>
          <div class="container m-2">
            <select name="considerations" class="custom-select" ref={register} >
              <option selected>Consideraciones</option>
              <option value="Ambiental">Ambiental</option>
              <option value="Politica">Política</option>
              <option value="Tributaria">Tributaria</option>
              <option value="Economica">Económica</option>
              <option value="Comunitaria">Comunitaria</option>
            </select>
        
          </div>
          <div class="container m-2">
            <select name="relatied" class="custom-select" ref={register} >
              <option selected>Temas relacionados</option>
            </select>
          </div>
          {/* <Link to="/opiniones">   */}
          {/* <Button as="input" size="lg" type="submit" variant="success" value="Crear Caso"/> */}
          {/* </Link> */}
              <Link to="/opiniones"> 
                 <input className="btn" type="submit" value="Crear caso" />
                </Link>
        </form>
      </div>
    </Fragment>
  );
}


export default FormCases;

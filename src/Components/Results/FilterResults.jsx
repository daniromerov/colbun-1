import React from 'react';
import "./Filterresults.css"; 

function FilterResults() {

    return ( 
      <div className="divtable">
<div className ="select">
  <div>
<select>
  <option value="temas">Temas</option>
</select>
</div>
<div>
<select>
  <option value="tipos entregables">Tipos entregables</option>
</select>
</div>
<div>
<select>
  <option value="areas">Áreas</option>
</select>
</div>
<div>
<select>
  <option value="tipos de opciones">Tipos de opciones</option>
</select>
</div>
<div>
<select>
  <option value="nivel autorizacion">Nivel autorización</option>
</select>
</div>
</div>
</div>

       
// <div class="btn-group">
//   <button type="button" class="btn btn-danger">Action</button>
//   <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     <span class="sr-only">Toggle Dropdown</span>
//   </button>
//   <div class="dropdown-menu">
//     <a class="dropdown-item" href="#">Action</a>
//     <a class="dropdown-item" href="#">Another action</a>
//     <a class="dropdown-item" href="#">Something else here</a>
//     <div class="dropdown-divider"></div>
//     <a class="dropdown-item" href="#">Separated link</a>
//   </div>
// </div>
)}
export default FilterResults;


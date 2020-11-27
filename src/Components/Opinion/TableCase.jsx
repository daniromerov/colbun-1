import React from "react";



function TableCase() {
  let [searchTerm, setSearchTerm] = React.useState("");
  let people = [
    { name: "hola", tema: "pello"}, 
    { name: "aja", tema: "probando"}
   ];

  const handleChange = e => {
e.preventDefault()
    setSearchTerm(e.target.value);

 };
 
 if(searchTerm.length > 0) {
   people = people.filter((i) => {
     return i.name.match(searchTerm); 
   })
 }
  


 
  
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      
      {people.map(item => {
        return (
          <div>
          <ul>
          <li>
            {item.name} - {item.tema}
          </li>
          
        
      </ul>
      </div>
      );
    } )}
    </div>
  );

}



export default TableCase;

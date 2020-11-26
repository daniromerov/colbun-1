import React from "react";



// const people = [
//   "Siri",
//   "Alexa",
//   "Google",
//   "Facebook",
//   "Twitter",
//   "Linkedin",
//   "Sinkedin"
// ];


function TableCase() {
  let [searchTerm, setSearchTerm] = React.useState("");
  let [searchResults, setSearchResults] = React.useState([]);
  const [name, setName] = React.useState(""); 
  const handleChange = e => {

    setSearchTerm(e.target.value);
    const nameResult = searchResults.map(item => (
    
      item.includes(e.target.value)   
   
     ))
     const nameFilter = nameResult.filter(itemName => (
      itemName === e.target.value
    )
 )
  
    // setName(nameResult)
   console.log(nameFilter)
  };

  React.useEffect(() => {
    fetch('dataCase.json')
    .then(response => response.json())
    .then(data => {
       const results = data.map(person =>
      person.name.toLowerCase()
   // console.log(person.name)
    );
    setSearchResults(results);
    //console.log(results)
      }); 
   
  }, [searchTerm]);

 
  
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
       {name}
      </ul>
    </div>
  );
}



export default TableCase;

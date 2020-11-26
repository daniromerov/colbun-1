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
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    fetch('dataCase.json')
    .then(response => response.json())
    .then(data => data


    const results = data.filter(person =>
        )    person.toLowerCase().includes(searchTerm)
    
    );
    setSearchResults(results);
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
        {searchResults.map(item => (
         item
        ))}
      </ul>
    </div>
  );
}



export default TableCase;

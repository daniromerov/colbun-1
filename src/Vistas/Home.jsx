import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import edit from "../img/Home/edit.png";
import add from "../img/Home/add.png";
import avatar from "../img/Home/avatar-01.png";
import search from "../img/Home/mdi_search.png";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
//Components
import NavBar from "../Components/Menu/Menu";
function Home() {
  const [casos, setCasos] = React.useState([]);
  React.useEffect(() => {
    console.log("useEffect");
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const datos = await fetch("dataCase.json");
    const archivoJ = await datos.json();
    console.log(archivoJ);
    setCasos(archivoJ);
  };

  const buscarDatos = async (valor) => {
    console.log("valor: " + valor.toUpperCase());
    const busqueda = await fetch("dataCase.json");
    const busquedaJ = await busqueda.json();
    console.log(busquedaJ);
    if (valor != "") {
      const presentacion = await busquedaJ.map((item) =>
        item.name.toUpperCase().includes(valor.toUpperCase()) ? item : ""
      );
      const book = presentacion.filter(Boolean);
      console.log(book);
      setCasos(book);
    } else {
      setCasos(busquedaJ);
    }
  };

  return (
    <section className="animsition">
      <div className="page-wrapper">
        <div className="page-container">
          <header className="header-desktop">
            <NavBar></NavBar>
            <div className="logo">
              <Link to="/">
                {" "}
                <img src={logo} />
              </Link>
            </div>
            <div className="section__content section__content--p30">
              <div className="container-fluid">
                <div className="header-wrap">
                  <div className="form-header">
                    <input
                      className="au-input au-input--xl"
                      id="inputSearch"
                      type="search"
                      name="search"
                      placeholder="Buscar.."
                    />
                    <button
                      className="au-btn--submit"
                      onClick={() =>
                        buscarDatos(
                          document.getElementById("inputSearch").value
                        )
                      }
                    >
                      <img src={search} />
                    </button>
                  </div>
                  <div className="header-button">
                    <div className="account-wrap">
                      <div className="account-item">
                        <div className="image">
                          <img src={avatar} />
                        </div>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <body>
            <div className="main-content">
              <div className="section__content section__content--p30">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="overview-wrap">
                        <h1 className="title-1"> Inicio </h1>
                      </div>
                    </div>
                  </div>

                  <div className="row-casos">
                    <div className="col-lg-12">
                      <h3 className="title-4"> Ultimos casos </h3>

                      {casos.map((item) => (
                        <div className="au-card recent-report">
                          <div className="au-card-inner">
                            <h3 className="title-5">{item.name}</h3>
                            <h3 className="title-6">Tema: {item.id}</h3>
                            <h3 className="title-6">
                              Area cliente: {item.area}
                            </h3>
                            <h3 className="title-6">Entregables: {item.ent}</h3>
                            <div className="Icons">
                              {" "}
                              <img src={edit} className="edit" />{" "}
                              <img src={add} className="edit" />{" "}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </div>
      </div>
    </section>
  );
}

export default Home;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { searchComidas } from './components/api/index';
import swal from "sweetalert";
import NavBar from "./components/navbar/NavBar";
import SearchList from "./components/search/search";
import MenuList from "./components/menu/menu";
import { Container } from "react-bootstrap";
import viewDetails from "./components/details/details";
import usePromedio from "./components/customHooks/promedio";

function App() {

  const [searchList, setSearchList] = useState([]);
  const [menu, setMenu] = useState([]);
  const promedio = usePromedio(menu);
  const searchRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const tokenSaved = localStorage.getItem('recetas-token');
    !tokenSaved && navigate("/login");
  }, []);

  useEffect(() => {
    promedio.crearPromedio();
  }, [menu])

  //function para buscar platos
  const handleSearch = async (e) => {
    e.preventDefault();
    const keywords = searchRef.current.value;
    if (keywords.length > 2) {
      const lista = await searchComidas(keywords);
      setSearchList(lista);
      // limpiamos la caja de texto
      searchRef.current.value = null;
    } else {
      swal('¡Cuidado!', 'Hay ingresar mas de 2 caracteres de busqueda.', 'warning')
    }
  }

  //verifica si el palto ya esta en el menu
  const menuExist = (id) => {
    return menu.some(values => values.id === id);
  }

  //verifica si hay platos repetidos
  const isLimitPlatos = (plato) => {
    if (plato.vegan) {
      return menu.filter(plato => plato.vegan).length >= 2;
    } else {
      return menu.filter(plato => !plato.vegan).length >= 2;
    }
  }

  //agrega platos al menu
  const handleAdd = (id) => {
    const plato = searchList.find(plato => plato.id === id);
    if (menu.length >= 4) return;
    if (isLimitPlatos(plato)) {
      swal('¡Cuidado!', 'Tenes qeu agregar 2 platos comunes y dos platos veganos', 'warning');
      return;
    }
    !menuExist(plato.id) ? setMenu([...menu, plato]) : swal('¡Oh!', 'Este plato ya existe en tu menu.', 'warning');
  }

  //mira los detalles del plato
  const handleDetails = (id) => {
    viewDetails(id, menu)
  }

  //borra los platos del menu
  const handleDelete = (id) => {
    const elements = menu.filter(plato => plato.id !== id);
    setMenu(elements);
  }

  return (
    <>
      <NavBar
        searchReference={searchRef}
        handleSearch={handleSearch}
      />

      <Container className="mt-3">
        Se han encontrado: <b>{searchList.length} resultados.</b>
      </Container>

      <SearchList
        listaPlatos={searchList}
        handleAdd={handleAdd}
      />
      <hr />
      <MenuList
        menuList={menu}
        handleDetails={handleDetails}
        handleDelete={handleDelete}
        promedio={promedio.promedio}
      />
    </>
  );
}
export default App;
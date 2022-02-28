import React from "react";
import { Container } from "react-bootstrap";
import ListaPlatos from "../platos/ListaPlatos";

export default function MenuList({ menuList, handleDetails, handleDelete, promedio }) {
  return (
    <>
      <Container><h3>Tu menu ({menuList.length} platos)</h3></Container>
      <ListaPlatos
        platos={menuList}
        isMenu
        handleDetails={handleDetails}
        handleDelete={handleDelete}
      />
      <Container>
        <ul className="list-group mt-3">
          <li className="list-group-item list-group-item-success text-center">Estadisticas totales de tu menu</li>
          <li className="list-group-item">Precio total del menu: ${Math.round(promedio.precio)}</li>
          <li className="list-group-item">Tiempo de preparacion total: {promedio.tiempo} minutos</li>
          <li className="list-group-item">Puntuacion total: {promedio.puntos}</li>
        </ul>
      </Container>

    </>
  )
}
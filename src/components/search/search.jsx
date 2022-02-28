import React from "react";
import ListaPlatos from "../platos/ListaPlatos";

export default function SearchList({ listaPlatos, handleAdd }){
    return(
        <ListaPlatos platos={listaPlatos} handleAdd={handleAdd}/>
    )
}
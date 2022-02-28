import React from "react";
import { Button, Col } from "react-bootstrap";

export default function PlatosItem({ plato, isMenu, handleAdd, handleDetails, handleDelete }) {
    const { id, image, title, vegan} = plato;

    const addPlato = () => {
        handleAdd(id);
    }

    const viewDetails = () => {
        handleDetails(id);
    }

    const deletePlato = () => {
        handleDelete(id);
    }

    return (
        <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12} className="mt-2">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="plato" />
                <div className="card-body">
                    {/* TITLE */}
                    <h5 className="card-title">{title}</h5>

                    {/* TAGS */}
                    <p className="card-text">
                        {vegan ? <span className="badge bg-success">Vegano</span>
                        : <span className="badge bg-primary">Común</span>}
                    </p>

                    {/* BUTTONS */}
                    {isMenu ?
                        <>
                            <Button onClick={deletePlato} variant='danger'>Eliminar</Button>
                            <Button onClick={viewDetails} className="ms-2" variant='warning'>Detalles</Button>
                        </>
                        : <Button onClick={addPlato} variant="success">Agregar</Button>}
                </div>
            </div>
        </Col>
    )
}
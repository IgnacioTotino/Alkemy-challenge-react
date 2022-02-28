import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PlatosItem from './PlatosItem';

export default function ListaPlatos({ platos, isMenu=false, handleAdd, handleDetails, handleDelete }) {
    return (
        <Container className='mt-3'>
            <Row className='justify-content-center'>
                {platos.map(listaPlatos => (
                <PlatosItem
                    key={crypto.randomUUID()}
                    plato={listaPlatos} 
                    isMenu={isMenu}
                    handleAdd={handleAdd}
                    handleDetails={handleDetails}
                    handleDelete={handleDelete}
                    />
                ))}
            </Row>
        </Container>
    )
}
import { useState } from "react";

export default function usePromedio(menu) {
    const [promedio, setPromedio] = useState({})

    const totalPrice = () => {
        return menu.map(platos => platos.pricePerServing)
        .reduce((a,b) => a + b, 0);
    }

    const promedioHealthScore = () => {
        return menu.map(platos => platos.healthScore)
        .reduce((a,b) => a + b, 0);
    }

    const promedioTiempo = () => {
        return menu.map(platos => platos.readyInMinutes)
        .reduce((a,b) => a + b, 0);
    }

    const crearPromedio = () => setPromedio(
        {
            precio: totalPrice(),
            puntos: promedioHealthScore(),
            tiempo: promedioTiempo()
        }
    );

    return{
        promedio,
        crearPromedio
    }
}
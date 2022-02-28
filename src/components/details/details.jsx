import swal from "sweetalert";

export default function viewDetails(id, menuArray) {
    const details = menuArray.find(plato => plato.id === id);
    const text = `
    Listo en: ${details.readyInMinutes} minutos
    Comida Vegana: ${details.vegan ? 'Si' : 'No'}
    Puntuacion: ${details.healthScore}
    Cantidad de likes: ${details.aggregateLikes}
    Precio: $${Math.round(details.pricePerServing)}
  `
  return swal(details.title, text, details.image)
}
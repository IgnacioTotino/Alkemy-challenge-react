import axios from 'axios';
import swal from 'sweetalert';

const APIKEY = process.env.REACT_APP_APIKEY;

export const getToken = (email, password) => {
    const data = {
        email,
        password
    }

    return axios.post('http://challenge-react.alkemy.org/', data)
        .then(result => {
            const { token } = result.data;
            return { token };
        }).catch(error => swal('Ha ocurrido un error :(', error.message, 'error'));
}

export const searchComidas = (keyword) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query=${keyword}&number=6&addRecipeInformation=true`;
    return axios.get(url)
        .then(res => {
            const { results } = res.data;
            return results;
        }).catch(error => swal('Ha ocurrido un error :(', error.message, 'error'));
}
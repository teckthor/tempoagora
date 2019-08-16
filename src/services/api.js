import axios from 'axios'

// const api = axios.create({ baseURL: 'https://cors-anywhere.herokuapp.com/https://api.hgbrasil.com' })
// const api = axios.create({ baseURL: 'https://cors-anywhere.herokuapp.com/http://samples.openweathermap.org/data/2.5' })
// const api = axios.create({ baseURL: 'https://cors-anywhere.herokuapp.com/http://apiadvisor.climatempo.com.br' })
function api() {

    fetch("https://community-open-weather-map.p.rapidapi.com/weather?lat=-22.659215099999997&lon=-43.1487614&callback=dev&id=2172797&lang=Portuguese%20-%20pt&units=%22metric%22&mode=xml%2C%20html&q=Rio%20de%20Janeiro%2Cbr", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "02309655bfmsh87fbe3a3f41af2ep10b29djsn8e1ae187629b"
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
}

export default api
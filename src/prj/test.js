/**
 * Created by lsh on 17/2/13.
 */

import * as ELEMENTS from './elements.js';
import { Http } from './http.js';
import { WEATHER_PROXY_HANDLER, WeatherData} from './weather-data.js';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

const APP_ID = '76a8fdfe4d4cb4ef1989e89e24bb67ed';

function searchWeather() {
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCH_CITY.value.trim();
    if (CITY_NAME.length == 0) {
        return alert('please enter city name');
    }
    ELEMENTS.ELEMENT_LOAD_TEXT.style.display = 'block';
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'none';

    const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME + '&units=metric&appid=' + APP_ID;
    Http.fetchData(URL)
        .then(responseData => {
            const WEATHER_DATA = new WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase());
            const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
            WEATHER_PROXY.temperature = responseData.main.temp;

            updateWeather(WEATHER_PROXY);
        })
        .catch(error => alert(error))
}

function updateWeather(weatherData) {
    ELEMENTS.ELEMENT_LOAD_TEXT.style.display = 'none';

    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
    ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;
    
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
}

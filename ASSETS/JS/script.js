// created an API key
var weatherAPIKey = "4a9646ee83d600552d65c84deed82d99";
var cityInput = document.querySelector('#City-input');
var searchButton = document.querySelector('#search-Btn');
var currentForecast = document.querySelector('.current-forecast');
var fiveDay = document.querySelector('.FiveDay');


// write a function to getWeather(). I will pass in a city as an argument to getWeather(city).
function getWeather(city) {
    //Inside getWeather make a fetch request that returns the data from the openweathermap API.
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIKey}&units=imperial`, {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow'
    })

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // Copied link from stackoverflow to get the weather icon
            var iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            
            // Dynamic html and data
            currentForecast.innerHTML = `
                    <div class="cityName"><h3 id="city">${data.name} </h3>
                        <div id="current-date">(${moment(data.dt, 'X').format('MM/DD/YYYY')})</div>
                        <img id="weather-icon" src='${iconurl}'>                        
                    </div>
                    <p class="current-city">Temp: <span id="temp-info">${data.main.temp} F</span></hp></p>
                    <p class="current-city">Wind: <span id="wind-info">${data.wind.speed}MPH</span></p>
                    <p class="current-city">Humidity: <span id="humidity-info">${data.main.humidity}%</span></p>
                    `
        });
}

searchButton.addEventListener('click', function () {
    getWeather(cityInput.value);
})

// Write a currentWeather(data) function that returns html values based on the data that is returned in your getWeather() fetch request.


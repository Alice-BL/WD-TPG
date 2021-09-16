// write a function to getWeather(). I will pass in a city as an argument to getWeather(city).
function getWeather(city) {
    //Inside getWeather make a fetch request that returns the data from the openweathermap API.
    fetch('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}', {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow'
})

    .then(function(response){
        return response.JSON();
    })
    .then(function(data){
        console.log(data);
    });
}



// Write a currentWeather(data) function that returns html values based on the data that is returned in your getWeather() fetch request.


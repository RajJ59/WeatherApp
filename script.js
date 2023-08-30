// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4a2b80cf8fmsh881076678dc30a8p19a8f5jsn6376012710b7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	
	cityname.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then((response) => {
	hum.innerHTML = response.humidity
	window.innerHTML = response.wind_speed
	tem.innerHTML = response.temp
	cloud_pct.innerHTML = response.cloud_pct
	temp.innerHTML = response.temp
	feels_like.innerHTML = response.feels_like
humidity.innerHTML = response.humidity
min_temp.innerHTML = response.min_temp
max_temp.innerHTML = response.max_temp
wind_speed.innerHTML = response.wind_speed
// wind_degrees.innerHTML = response.wind_degrees
sunrise.innerHTML = response.sunrise
sunset.innerHTML = response.sunset
})
.catch(err => console.error(err));
	
}

submit.addEventListener("click", (e) =>{
	getWeather(city.value)
	e.preventDefault()
})

getWeather("Delhi")

const apiBase = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "297dc21c8c94f31bccf6939f7a26e847";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const apiurl = `${apiBase}${city}&appid=${apiKey}`;
  const response = await fetch(apiurl);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else{
    var data = await response.json();
    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    const weatherIcon = document.querySelector(".weather-icon");
  
    if(data.weather[0].main == 'Clouds'){
          weatherIcon.src = 'Images/clouds.png';
      }
      else if(data.weather[0].main == 'Clear'){
          weatherIcon.src = 'Images/clear.png';
      }
      else if(data.weather[0].main == 'Rain'){
          weatherIcon.src = 'Images/rain.png';
      }
      else if(data.weather[0].main == 'Drizzle'){
          weatherIcon.src = 'Images/drizzle.png';
      }
      else if(data.weather[0].main == 'Snow'){
          weatherIcon.src = 'Images/snow.png';
      }
      else if(data.weather[0].main == 'Mist'){
          weatherIcon.src = 'Images/mist.png';
      }
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
   }
  }
//we use the event listner for when we click the div
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})

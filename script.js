
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=germany&appid=297dc21c8c94f31bccf6939f7a26e847";

async function checkweather() {
  const response = await fetch(apiurl);
  var data = await response.json();
  console.log(data);
}
checkweather();
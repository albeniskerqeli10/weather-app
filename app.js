let btn = document.querySelector(".btn").addEventListener("click", getWeather);
let wind = document.createElement('div');
let temp = document.createElement('div');
let desc = document.createElement('div');
wind.classList.add('col-lg-3' ,"box")
temp.classList.add('col-lg-3' ,"box")
desc.classList.add('col-lg-3' ,"box")
let text= document.createElement('h1');
text.classList.add('display-4');
async function getWeather() {
  let searchval = document.querySelector("#searchval").value;
  let row = document.querySelector(".row");
  const weather = `http://api.openweathermap.org/data/2.5/weather?q=${searchval}&units=metric&appid=3c7cb311b168cf57cd232cc2b77cde50`;
  const response = await fetch(weather);
  const data = await response.json();
  if (searchval =='') {
  } else {
    text.innerHTML = `<h1 class="display-4">${data.name} <b class="country">${data.sys.country}</b></h1>`


    let icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    wind.innerHTML = `
    <h2>Wind</h2>
    <h1>${data.wind.speed}</h1>
    
    `;

    temp.innerHTML = `
    <h2>Temperature</h2>
    <h1>${data.main.temp}°C</h1>`;
    desc.innerHTML = `
    <h2>Weather</h2>
    <img width="50" height="50" src="${icon}"></img>
    <h2>${data.weather[0].description}</h2>`;
    row.appendChild(text);
    row.appendChild(wind);
    row.appendChild(temp);
    row.appendChild(desc);
  }
}
getWeather();

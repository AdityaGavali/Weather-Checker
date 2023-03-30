let weather = {
"apikey" : "ab54148dbddd6c5a6df789bc6fc35521",

fetchWeather : function(city){
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.apikey
        )
.then((response)=>response.json())
 .then((data)=>this.displayWeather(data))
  
},
displayWeather : function(data){
    if(data.cod == 404){
      document.querySelector(".city").innerText = "CITY NOT FOUND";
      document.querySelector(".icon").src = "";
    document.querySelector(".description").innerText = "";   
    document.querySelector(".temp").innerText =  "";
    document.querySelector(".humidity").innerText = "";
    document.querySelector(".wind").innerText = "";

    }
    const { name }  = data;
    const { icon,description } = data.weather[0];
    const { temp,humidity } = data.main;
    const { speed } = data.wind;
    console.log(name,icon,description,temp,humidity);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;   
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
     document.querySelector(".weather").classList.remove("load");
 },
 search : function(){
    this.fetchWeather(document.querySelector(".search_bar").value);
 }
}
document.querySelector(".search button").addEventListener('click',function(){
    weather.search();
})
document
  .querySelector(".search_bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
  weather.fetchWeather('Pune');
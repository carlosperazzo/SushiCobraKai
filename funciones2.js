 
function BuscarTiempo()
{

  var list=document.getElementById("cities");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Quilmes,ar&APPID=246a6d3f3ecc1db4ff57f50d8159a9ac&units=metric`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    const { main, name, sys, weather } = data;
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
      weather[0]["icon"]
    }.svg`;
    
    const li = document.createElement("li");
    li.classList.add("city");
    const markup = `
      <table width='150px' border='0'><tr><td><h2 class="city-name" data-name="${name},${sys.country}">
        ${name}
      
      </h2></td>
      <td><span class="city-temp">${Math.round(main.temp)}<sup>°C</sup></span></td>
      <td><figure>
        <img class="city-icon" src="${icon}" alt="${
      weather[0]["description"]
    }">
        
      </figure></td></tr></table>
    `;
    
    li.innerHTML = markup;
   
    let list= document.getElementById("cities");
    list.appendChild(li);
  })
  .catch(() => {
    
  });



};

getLocation()
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.")
    }
}

function showPosition(position) {
    var pos = {
        latitude: parseFloat(position.coords.latitude),
        longitude: parseFloat(position.coords.longitude)
    }
    GETWeaterApi(pos)
}
async function GETWeaterApi(pos) {
    var url = `http://api.weatherapi.com/v1/current.json?key=61ac6c912d0c469aa4755351231402 &q=${pos.latitude}, ${pos.longitude}&aqi=yes&lang=vi`

    const response = await fetch(url).then(function (response) {
        return response.json();
    }).catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
    console.log(response)
    showLocation(response.location)
    showTempInfo(response)

}
function showLocation(response) {
    var name = document.getElementById("l-name")
    var country = document.getElementById("l-country")
    var coord = document.getElementById("coordinates")
    name.innerHTML = response.name
    country.innerHTML = response.country
    coord.innerHTML = `(${response.lat} : ${response.lon})`
}
function showTempInfo(response) {
    showCurrentTempo(response.current)
    showHumidity(response.current)
    showWeatherIcon(response.current)
    showUV(response.current)
}
function showCurrentTempo(data) {
    var tempo = document.getElementById("current-tempo")
    tempo.innerHTML = `Nhiệt độ ${data.temp_c}°C <br/>(FeelLike: ${data.feelslike_c} °C)`;
}
function showHumidity(data) {
    var humid = document.getElementById("humidity")
    humid.innerHTML = "Độ ẩm: " + data.humidity + "%"
}
function showWeatherIcon(data) {
    var icon = document.getElementById("weather-icon")
    icon.innerHTML = `<img src= "${data.condition.icon}"/>  <div class="weather-text">${data.condition.text}</div>`
}
function showUV(data) {
    var uv = document.getElementById("UV")
    uv.innerHTML = `Chỉ số UV: ${parseFloat(data.uv)}`
    if (data.uv < 3) {
        uv.style.color = "Green"
        return
    }
    if (data.uv < 6) {
        uv.style.color = "Yellow"
        return
    }
    if (data.uv < 8) {
        uv.style.color = "orange"
        uv.style.fontWeight = "600"
        return
    }
    if (data.uv < 10) {
        uv.style.textShadow = "Red"
        uv.style.fontWeight = "600"
        return
    }
    uv.style.color = "Violet"
    uv.style.fontWeight = "700"

}
let countries = ["Kazakhstan", "Russia", "England", "France"];
let cities_by_country = {
     "Kazakhstan": ["Almaty", "Astana", "Karagandy"],
     "Russia": ["Moscow", "Saint-Petersburg", "Kazan"],
     "England": ["London", "Manchester", "Liverpool"],
     "France": ["Paris", "Lyon", "Marseille"]
}

let first = document.querySelector("#countries");
for (var i = 0; i < countries.length; i++) {
     var option1 = document.createElement('option');
     option1.innerHTML = String(countries[i]);
     first.appendChild(option1);
     console.log(countries[i]);
}

function changeCities() {
     var selectValue = document.getElementById('countries').value;
     document.getElementById("cities").options.length = 1;
     var city = document.createElement('option');
     for (var i = 0; i < cities_by_country[String(selectValue)].length; i++){
          var city = document.createElement('option');
          city.innerHTML=String(cities_by_country[String(selectValue)][i]);
          cities.appendChild(city);
     }

}

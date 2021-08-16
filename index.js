alert("Автор: NoNe");
var count;
var bel = 'Belarus'
fetch('https://ipapi.co/json/')
  .then(d => d.json())
  .then(d => count = d.country_name);
  
if (count === count) {
  document.querySelector('#ip').innerHTML = 'ERROR IP'
  alert('Err#01: country in BlackList')
  document.querySelector('#ipinfo').innerHTML = 'COUNTRY IN BLACKLIST'
}
else {
  fetch('https://ipapi.co/json/')
    .then(d => d.json())
    .then(d => document.querySelector('#ip').innerHTML = d.ip + count);
  
  fetch('https://ipapi.co/json')
    .then(d => d.json())
    .then(d => document.querySelector('#ipinfo').innerHTML = "Страна/Регион:<br>" + d.country_name + ", " + d.region + "<br><br>Провайдер:<br>" + d.org);
} 
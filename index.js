fetch('https://ipapi.co/json/')
  .then(d => d.json())
  .then(d => document.querySelector('#ip').innerHTML = d.ip);
  
fetch('http://ip-api.com/json')
  .then(d => d.json())
  .then(d => document.querySelector('#ipinfo').innerHTML = "Страна/Регион:<br>" + d.country + ", " + d.regionName + "<br><br>Провайдер:<br>" + d.org);

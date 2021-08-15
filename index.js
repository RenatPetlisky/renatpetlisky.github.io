fetch('https://ipapi.co/json/')
  .then(d => d.json())
  .then(d => document.querySelector('#ip').innerHTML = d.ip);
  
fetch('https://ipapi.co/json/')
  .then(d => d.json())
  .then(d => document.querySelector('#ipinfo').innerHTML = "Страна/Регион:<br>" + d.country_name + ", " + d.region + "<br><br>Провайдер:<br>" + d.org);

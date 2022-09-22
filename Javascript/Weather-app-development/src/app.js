import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import weatherApp from './weather';

weatherApp();
// fetch api
fetch('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}')
.then(response=>{
  console.log(response);
})
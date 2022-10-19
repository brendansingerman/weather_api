fetch('https://api.openweathermap.org/data/2.5/forecast?q=SanFrancisco&appid={548cadc2a6ef3ed96d4acc5a9cff4482}')
  .then((response) => response.json())
  .then((data) => console.log(data));


//   api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// making another comment for testing purposes

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

// Example temperature in Celsius
let temperatureInCelsius = 25;

let convertedTemperature = celsiusToFahrenheit(temperatureInCelsius);

console.log(`${temperatureInCelsius}°C is equal to ${convertedTemperature}°F`);

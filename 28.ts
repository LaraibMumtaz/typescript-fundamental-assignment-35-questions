//28- Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
function fahrenheitToCelsius(fahrenheitTemperatures: number[]): void {
    const celsiusTemperatures: number[] = [];
  
    for (let i = 0; i < fahrenheitTemperatures.length; i++) {
        const celsius = (fahrenheitTemperatures[i] - 32) * 5 / 9;
        celsiusTemperatures.push(celsius);
    }
  
    console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);
    console.log("Celsius Temperatures:", celsiusTemperatures);
  }
  
  
  const fahrenheitTemperatures = [32, 68, 86, 104];
  fahrenheitToCelsius(fahrenheitTemperatures);
  //================================================
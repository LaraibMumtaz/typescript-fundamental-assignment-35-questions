//Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
const temperatures: number[] = [25, 28, 30, 22, 27]; // Example temperatures array

let highestTemperature: number = temperatures[0]; // Assume the first temperature is the highest initially

for (let i = 1; i < temperatures.length; i++) {
  if (temperatures[i] > highestTemperature) {
    highestTemperature = temperatures[i];
  }
}

console.log("The highest temperature is:", highestTemperature);

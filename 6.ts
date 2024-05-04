//Medium
//Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
function calculateArea(radius: number): number {
    const area: number = Math.PI * radius * radius;
    return area;
  }
  
  const radius: number = 14;
  console.log(calculateArea(radius));
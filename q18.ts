/* Seeing the World: Think of at least five places in the world you’d like to visit................ its order has changed.*/

let places: string[] = ["Saudi Arabia", "Paris", "South Korea", "Turkey", "Qatar"];

console.log("Original Order:", places);

console.log("Alphabetical Order:", [...places].sort());

console.log("Original Order after sorting:", places);

console.log("Reverse Alphabetical Order:", [...places].sort().reverse());

console.log("Original Order after reverse sorting:", places);

places.reverse();
console.log("Reversed Order:", places);

places.reverse();
console.log("Back to Original Order:", places);

places.sort();
console.log("Sorted Alphabetical Order:", places);

places.sort((a, b) => b.localeCompare(a));
console.log("Sorted Reverse Alphabetical Order:", places);

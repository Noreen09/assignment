console.log("apple" === "apple");
//console.log("banana" !== "orange");
//console.log("hello" === "world");
console.log("open" !== "open");

console.log("HELLO".toLowerCase() === "hello");
console.log("WORLD".toLowerCase() === "WORLD");

console.log(10 === 10);
//console.log(5 !== 10); 
console.log(10 > 5);
console.log(5 < 10);
console.log(10 >= 10);
console.log(5 <= 4);


console.log((5 > 3) && (10 < 20)); 
console.log((5 < 3) || (10 < 20));
console.log((5 < 3) && (10 < 20));
console.log((5 < 3) || (10 > 20));


const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers.includes(3));
console.log(["banana", "orange", "apple"].includes("apple"));
console.log(numbers.includes(7));
console.log(["banana", "orange", "apple"].includes("grape"));


let fruit: string[] = ["banana", "orange", "apple"];
console.log(!fruit.includes("grape"));
console.log(!fruit.includes("banana")); 
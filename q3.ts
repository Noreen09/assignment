let fname = "Noreen";
console.log("Uppercase : " + fname.toUpperCase());
console.log("Lowercase : " + fname.toLowerCase());

let titleCaseName = fname.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");

console.log("Titlecase : " + titleCaseName);

export {};

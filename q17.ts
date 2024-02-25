/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */


let guest_list = [
  "Guest 1",
  "Guest 2",
  "Replaced Guest",
  "Guest 4",
  "Guest 5",
  "Guest 6",
];

console.log(
  "Good News! we got a bigger table. Time to invite some more guests.\n"
);
guest_list.unshift("New Guest");
guest_list.splice(Math.floor(guest_list.length / 2), 0, "New Guest");
guest_list.push("New Guest");

console.log(
  guest_list[0] +
    " \n I would like to invite you to the dinner at our house which will be held on 27th of this month. We will be glad if you join us. \n Sincerely Yours Noreen.\n"
);
console.log("\n");
console.log(
  guest_list[1] +
    " \n I would like to invite you to the dinner at our house which will be held on 27th of this month. We will be glad if you join us. \n Sincerely Yours Noreen.\n"
);
console.log("\n");

for (let j = 2; j < guest_list.length; j++)
  console.log(
    guest_list[j] +
      "! Accept my sincerest appology. We can't afford the table but we will have dinner surely next time. \n"
  );

export {};

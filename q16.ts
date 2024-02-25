/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */


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
for (let j = 0; j < guest_list.length; j++)
  console.log(
    guest_list[j] +
      "! \n I would like to invite you to the dinner at our house which will be held on 27th of this month. We will be glad if you join us. \n Sincerely Yours Noreen.\n"
  );

export {};

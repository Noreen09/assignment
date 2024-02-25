// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest_list = [
  "Guest 1",
  "Guest 2",
  "Guest 3",
  "Guest 4",
  "Guest 5",
  "Guest 6",
];
for (let j = 0; j < guest_list.length; j++)
  console.log(
    `${guest_list[j]}! \n I would like to invite you to the dinner at our house which will be held on 27th of this month. We will be glad if you join us. \n Sincerely Yours Noreen.\n`
  );

export {};

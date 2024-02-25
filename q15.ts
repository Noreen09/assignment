/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list */

let guest_list = [
  "Guest 1",
  "Guest 2",
  "Guest 3",
  "Guest 4",
  "Guest 5",
  "Guest 6",
];
guest_list.splice(2, 1, "Replaced Guest");

for (let j = 0; j < guest_list.length; j++)
  console.log(
    `${guest_list[j]}! \n I would like to invite you to the dinner at our house which will be held on 27th of this month. We will be glad if you join us. \n Sincerely Yours Noreen.\n`
  );

export {};

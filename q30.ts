let usernames: string[] = ['admin', 'Noreen', 'Naila', 'Sarah', 'Zara'];

for (let i: number = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
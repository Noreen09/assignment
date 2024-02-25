let current_users: string[] = ['John', 'jane', 'jim', 'sarah', 'david'];
let new_users: string[] = ['JOhn', 'SARAH', 'jessica', 'mike', 'sally'];

for (let i: number = 0; i < new_users.length; i++) {
    let new_username: string = new_users[i].toLowerCase();
    let is_unique: boolean = true;
    for (let j: number = 0; j < current_users.length; j++) {
        if (new_username === current_users[j].toLowerCase()) {
            is_unique = false;
            console.log(`Username ${new_users[i]} has already been taken, please enter a new username.`);
            break;
        }
    }
    if (is_unique) {
        console.log(`Username ${new_users[i]} is available.`);
    }
}
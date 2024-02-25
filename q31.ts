let username: string[] = [];

if (username.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let i: number = 0; i < username.length; i++) {    
            if (username[i] === 'admin') {
            console.log("Hello admin, would you to see a status?");
        } {
            console.log(`Hello ${username[i]}, thank you for logging in again.`);
        }
    }
}
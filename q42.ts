function make_great(magician: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = 'The Great ' + magicians[i];
    }
}

let magician: string[] = ['Harry Houdini', 'David Copperfield', 'Dynamo'];
show_magicians(magician);
make_great(magician);
console.log("After making great");
show_magicians(magician);

export{};
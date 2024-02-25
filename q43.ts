function make_great(magicians: string[]): string[] {
    return magicians.map(magician => 'The Great ' + magician);
}

let magicians1: string[] = ['Harry Houdini', 'David Copperfield', 'Dynamo'];
let great_magicians: string[] = make_great(magicians.slice());
console.log("Original magicians: string[]");
show_magicians(magicians1);
console.log("Great magicians: string[]");
show_magicians(great_magicians);

export {};
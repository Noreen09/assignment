function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Dynamo'];
show_magicians(magicians);
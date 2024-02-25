function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt will be size ${size} and the customer feedback is "${message}"`);
}

make_shirt(); 
make_shirt('small', 'the cloth is fine'); 
function create_car(manufacturer: string, model: string, ...details: [string, any][]): object {
    let car: {manufacturer: string, model: string, [key: string]: any} = {
        manufacturer: manufacturer,
        model: model
    };
    for (let detail of details) {
        car[detail[0]] = detail[1];
    }
    return car;
}

let car1 = create_car('Toyota', 'Corolla', ['color', 'red'], ['year', 2020]);
console.log(car1);

let car2 = create_car('Honda', 'Civic', ['color', 'blue'], ['year', 2019], ['transmission', 'automatic']);
console.log(car2);
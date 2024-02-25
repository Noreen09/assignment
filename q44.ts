function order_sandwich(items: string[]): void {
    console.log(`Ordered a sandwich with the following items: ` + items.join(', '));
}

order_sandwich(['ham', 'cheese']);
order_sandwich(['turkey', 'avocado', 'lettuce']);
order_sandwich(['peanut butter', 'jelly']);

export{};
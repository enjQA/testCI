import { Cat } from "../code/cat";

const catName: string = 'Brownie';
const cat = new Cat(catName, 'white');

test('testing move function', () => {
    expect(cat.move(10)).toBe(`${catName} moved 10m`);
})

test('testing say function', () => {
    expect(cat.say()).toBe(`Cat ${catName} says meow`);
})
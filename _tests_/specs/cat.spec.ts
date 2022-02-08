import { Cat } from "../code/cat";

const catName = 'Brownie';
const cat = new Cat(catName, 'white');

describe('cat unit tests', () => {
    test('testing move function', () => {
        expect(cat.move(10)).toBe(`${catName} moved 10m`);
    })

    test('testing say function', () => {
        expect(cat.say()).toBe(`Cat ${catName} says meow`);
    })
})
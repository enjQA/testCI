export class Cat {
    private name: string;
    private color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    public move(distanceMetr: number): string {
        return `${this.name} moved ${distanceMetr}m`
    }

    public say(): string {
        return `Cat ${this.name} says meow`
    }
}
function greet (): string;
function greet (name: string): string;

function greet (name?: string): string {
    if (name) return `hello, ${name}!`
    return 'hello there!'
}

console.log('regular ', greet())
console.log('with name ', greet('elena'))
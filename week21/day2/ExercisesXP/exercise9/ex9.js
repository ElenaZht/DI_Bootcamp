function greet(name) {
    if (name)
        return "hello, ".concat(name, "!");
    return 'hello there!';
}
console.log('regular ', greet());
console.log('with name ', greet('elena'));

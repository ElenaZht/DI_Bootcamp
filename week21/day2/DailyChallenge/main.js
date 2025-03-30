function validateUnionType(value, allowedTypes) {
    return allowedTypes.indexOf(value) !== -1;
}
var language = ['en', 'fr', 'de', 'he'];
console.log('is franch allowed? ', validateUnionType('fr', language));
console.log('is georgian allowed? ', validateUnionType('ge', language));

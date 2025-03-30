 function validateUnionType(value: any, allowedTypes: string[]): boolean{
    return allowedTypes.indexOf(value) !== -1
}

const language = ['en', 'fr', 'de', 'he']
console.log('is franch allowed? ', validateUnionType('fr', language))
console.log('is georgian allowed? ', validateUnionType('ge', language))
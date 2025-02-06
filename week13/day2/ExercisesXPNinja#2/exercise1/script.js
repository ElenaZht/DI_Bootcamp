import { timeTillNewYear } from './date.js'

function main(){
    console.log('let\'s count time till new year:')
    const remains = timeTillNewYear('2026-01-01')
    console.log(`it is ${remains.years} years, ${remains.months} months, ${remains.days} days and ${remains.hours} hours till New  Year`)
}
main()
import { getTimeTillHollyday } from './date.js'

function main(){
    const holiDate = '2025-02-24'
    const holiName = 'aneversary'
    const dateInfo = getTimeTillHollyday(holiDate)
    console.log(`next hollyday is ${holiName} that is on the ${holiDate}`)
    console.log(
        `it is ${dateInfo.days} days and ${dateInfo.hours}:${dateInfo.minutes}:${dateInfo.seconds} hours left`
    )
}
main()
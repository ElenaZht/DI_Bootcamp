import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
dayjs.extend(duration)
dayjs.extend(advancedFormat)

export function getTimeTillHollyday(holiDate){
    //returns today’s date and the amount of time left from now until 
    // the next holiday, additionally display what holiday that is
    //Bonus: Try to find a node module to get the date of the holidays
    const now = dayjs()
    const holiday = dayjs(holiDate)
    const diff = holiday.diff(now)
    const timeRemain = dayjs.duration(diff)
    const days = timeRemain.days()
    const hours = timeRemain.hours()
    const minutes = timeRemain.minutes()
    const seconds = timeRemain.seconds()

    return {'today': now, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds}
}

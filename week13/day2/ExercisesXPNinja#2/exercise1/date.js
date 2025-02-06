import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
dayjs.extend(duration)
dayjs.extend(advancedFormat)

export function timeTillNewYear(date){
    // function that returns the amount of time left from now until January 1st
    const now = dayjs()
    const targetDate = dayjs(date)
    const diff = targetDate.diff(now)

    const remainingTime = dayjs.duration(diff)
    const years = remainingTime.years()
    const months = remainingTime.months()
    const days = remainingTime.days()
    const hours = remainingTime.hours()

    return {'years': years, 'months': months, 'days': days, 'hours': hours}
}
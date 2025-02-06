import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
dayjs.extend(duration)
dayjs.extend(advancedFormat)

export function getMinuts(bdate){
    const now = dayjs()
    const bday = dayjs(bdate)
    const diff = now.diff(bday)
    const timePast = dayjs.duration(diff)
    const yourMinutes = (timePast.asMinutes()).toFixed(0)
    return yourMinutes
}
import { format, addDays} from 'date-fns'

export function dates(){
    const today = new Date();
    const newDate = addDays(today, 5)

    const todayFormated = format(today, 'yyyy-MM-dd')
    const newDateFormated = format(newDate, 'yyyy-MM-dd')

    console.log('today is ', todayFormated)
    console.log('after 5 days ', newDateFormated)
}
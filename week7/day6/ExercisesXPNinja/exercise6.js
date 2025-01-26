// Create a function called createCalendar(year, month)
// The function should create a calendar for the given year/month.
// The calendar should be a table, where a week is <tr>, and 
// a day is <td>. The table top should be <th> with weekday names: 
// the first day should be Monday, and so on until Sunday.

function getMonthMatrix(year, month){
    const firstDay = new Date(year, month - 1, 1)
    const lastDay = new Date(year, month, 0).getDate() //0th day of a month refer to the last day of the previous month
    let calendar = []
    let startday = firstDay.getDay() - 1 // 3 -> we(from sun= 0)
    if (startday < 0){
        startday += 7
    }
    let date = 1

    for (let w = 0; w <= 6; w++){
        let week = []
        for (let i = 0; i< 7; i++){
            if ( w === 0 && i < startday){
                week.push('.')
                
            } else {
                week.push(date)
                date++
            }
            
            if (date > lastDay) break
        }
        if (week.length < 7){
            week = week.concat(Array(7 - week.length).fill('.'))
        }
        calendar.push(week)
        if (date > lastDay) break
    }
    
    return calendar
}

function createTable(calendar){

    const table = document.createElement('table')

    const thead = document.createElement('thead')
    const headers = document.createElement('tr')
    const weekDays = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su']
    weekDays.map(i => {
        const day = document.createElement('th')
        day.textContent = i
        headers.appendChild(day)
    })
    thead.appendChild(headers)
    table.appendChild(thead)

    const tbody = document.createElement('tbody')
    for (let i = 0; i < calendar.length; i++){
        const row = document.createElement('tr')
        for (let y = 0; y < 7; y++){
            const td = document.createElement('td')
            td.textContent = calendar[i][y]
            row.appendChild(td)
        }
        tbody.appendChild(row)
    }
    table.appendChild(tbody)

    const body = document.querySelector('body')
    body.appendChild(table)
}

function createTitle(year, month){
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const body = document.querySelector('body')
    const title = document.createElement('p')
    title.textContent = monthNames[month - 1] + ' ' + year
    body.appendChild(title)
}

function createCalendar(year, month){
    const calendar = getMonthMatrix(year, month)
    createTitle(year, month)
    createTable(calendar)
}

function main(){
    createCalendar(2024, 12)
    createCalendar(2025, 1)
    createCalendar(2025, 2)
    createCalendar(2025, 3)

}

main()

function calculateTip(){
    const billAmount = document.getElementById('billamt').value
    const serviceQuality = document.getElementById('serviceQual').value
    let numberOfPeople = document.getElementById('peopleamt').value

    if (serviceQuality == '0' || billAmount == ''){
        alert('service quality and bill amount should be filled')
    }

    if (+numberOfPeople < 1){
        numberOfPeople = 1
        const each = document.getElementById('each')
        each.style.display = 'none'
    }

    let total = (( billAmount * serviceQuality ) / numberOfPeople).toFixed(2)
    const totalTip = document.getElementById('totalTip')
    totalTip.style.display = 'block'

    const tip = document.getElementById('tip')
    tip.textContent = total
}

function main(){
    const button = document.getElementById('calculate')
    button.addEventListener('click', (e) => {
        e.preventDefault()
        calculateTip()
    })

    const totalTip = document.getElementById('totalTip')
    totalTip.style.display = 'none'
}
main()
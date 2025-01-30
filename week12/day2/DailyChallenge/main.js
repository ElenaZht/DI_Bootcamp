async function fetchConvertionRate(base, target) {
    const apikey = 'ee6b19f17e3e29a859f2ce42'
    try{
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apikey}/pair/${base}/${target}`)
        if (!response.ok){
            console.error('pair not found')
            return
        }

        try{
            const respJson = await response.json()
            console.log(`1${base} = ${respJson.conversion_rate}${target}`)
            return respJson.conversion_rate

        } catch (error){
    
            console.error('cant parse to json', error)
            return
        }

    } catch (error){
        console.error('request failed', error)
        return
    }
}

async function convert(base, target, amount){
    const rate = await fetchConvertionRate(base, target)
    console.log(typeof rate, typeof amount)
    return rate * amount
    
}

function showResult(convertionResult, target){
    const dest = document.getElementsByClassName('result')[0]
    dest.textContent = convertionResult + target
}

async function inputHandler(event){
    event.preventDefault()
    const base = document.getElementById('base').value
    if (!base){
        alert('chose base')
        return
    }

    const target = document.getElementById('target').value
    if (!target){
        alert('chose target')
        return
    }

    const amount = document.getElementById('amount').value

    const convertionResult = await convert(base, target, +amount)
    showResult(convertionResult, target)

}

async function switchCurrencies(event){
    event.preventDefault()
    const base = document.getElementById('base').value
    const target = document.getElementById('target').value
    let temp = base

    if (base && target){
        document.getElementById('base').value = target
        document.getElementById('target').value = temp

        const amount = document.getElementById('amount').value
        const convertionResult = await convert(base, target, +amount)
        showResult(convertionResult, target)
    }
}

function main(){
    const convertBtn = document.getElementById('convertBtn')
    convertBtn.addEventListener('click', inputHandler)

    const switchBtn = document.getElementById('switch')
    switchBtn.addEventListener('click', switchCurrencies)
    
}
main()



function main(){
    const output = document.getElementsByClassName('output')[0]
    const selectedOption = document.querySelector('option[selected]')
    output.textContent = selectedOption.value

    const select = document.getElementById('genres')
    select.addEventListener('input', (event) => {
        event.preventDefault()
        const selectedOption = document.querySelector('option[selected]')
        output.textContent = event.target.value
    })
}
main()
// Write a JavaScript program to calculate the volume of a sphere.

function radiusToVolume(radius){
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

function volumeToRadius(volume){
    return Math.cbrt((3 * volume) / (4 * Math.PI));
}


function getResult(){
    event.preventDefault()
    let radiusInput = document.getElementById('radius')
    let volumeInput = document.getElementById('volume')
    if (radiusInput.value != '' && volumeInput.value == ''){
        let res = radiusToVolume(parseFloat(radiusInput.value))
        volumeInput.value = res
    } else if (volumeInput.value != '' && radiusInput.value == ''){
        let res = volumeToRadius(parseFloat(volumeInput.value))
        radiusInput.value = res
    } else {
        alert("choose one option: radius to volue or volume to radius!")
    }
}

let button = document.getElementById('submit')
button.addEventListener('click', getResult)
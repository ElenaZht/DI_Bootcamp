const inputMsg =  document.getElementById('hello') as HTMLInputElement;
if (inputMsg && inputMsg instanceof HTMLInputElement){
    console.log(inputMsg.value)
} else {
    console.log('not found')
}
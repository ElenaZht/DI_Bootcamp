var inputMsg = document.getElementById('hello');
if (inputMsg && inputMsg instanceof HTMLInputElement) {
    console.log(inputMsg.value);
}
else {
    console.log('not found');
}

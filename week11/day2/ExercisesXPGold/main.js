function main(){
    const params = new URLSearchParams(window.location.search);
    const firstName = params.get('firstName');
    const lastName = params.get('lastName');

    const newUser = document.createElement('div')
    const container = document.getElementById('userInfo')
    
    newUser.textContent = firstName + ' ' + lastName
    container.appendChild(newUser)
}
main()
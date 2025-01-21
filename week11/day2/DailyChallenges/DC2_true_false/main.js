function allTruthy(parameters){
    return Array.from(arguments).every((param) => !!param);
}

function main(){
    console.log('expect true', allTruthy(true, true, true))
    console.log('expect false', allTruthy(true, false, true))
    console.log('expect false', allTruthy(5, 4, 3, 2, 1, 0))
}

main()
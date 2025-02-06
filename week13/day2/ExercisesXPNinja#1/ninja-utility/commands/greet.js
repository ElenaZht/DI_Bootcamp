//Use the chalk package to create a colorful greeting message and display it in the terminal.
import chalk from 'chalk'

export function colorfulMessege(){
    const words = ['this', 'is', 'colorful', 'messege!']
    console.log(chalk.bgRed(words[0]))
    console.log(chalk.bgYellow(words[1]))
    console.log(chalk.bgGreen(words[2]))
    console.log(chalk.bgMagenta(words[3]))
}
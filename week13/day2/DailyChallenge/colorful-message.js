import chalk from 'chalk'

export function colorfulMessege(msg){
    console.log(chalk.bgYellow(chalk.magenta(msg)))
}
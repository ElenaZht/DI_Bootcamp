import { greet } from './greeting.js'
import chalk from 'chalk'

const name = "Elena"
console.log(chalk.magenta(greet(name)))
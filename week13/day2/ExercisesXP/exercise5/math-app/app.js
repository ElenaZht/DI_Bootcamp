import {add, mult} from './math.js'
import lodash from 'lodash'

console.log('my calc ', add(2, 3), 'expected 5')
console.log('my calc ', mult(2, 3), 'expected 6')
console.log('lodash ', lodash.add(2, 3), 'expected 5')
console.log('lodash ', lodash.multiply(2, 3), 'expected 6')
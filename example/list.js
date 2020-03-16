import bulma from '../bulma/map'

const [,,arg] = process.argv
const [one, two, three, four, five, ...rest] = Object.keys(bulma).sort()

const A = arg ? [one, two, three, four, five, '...'] : rest

A.forEach(a => console.log(a))
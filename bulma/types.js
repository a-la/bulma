import { EOL } from 'os'
import classes from './map'
import camel from './camel'
import { writeFileSync } from 'fs'

const T = (tt) => `import 'react'

declare module 'react' {
  interface HTMLAttributes<T> {
${tt}
  }
}`

const S = (desc, name) => `/**
 * ${desc}
 */
${/-/.test(name) ? `'${name}'` : name}?: boolean`

const props = Object.keys(classes).map(k => {
  const s = S(`Add Bulma's \`.${k}\` class to the element.`, k)
  return s
})

// 2. camel cases
const propsCamel = Object.entries(camel).map(([k, v]) => {
  const s = S(`Add Bulma's \`.${v}\` class to the element. Alias for \`${v}\` prop.`, k)
  return s
})

props.push(...propsCamel)

let p = props.join(EOL).replace(/^/gm, '    ')
const t = T(p)

writeFileSync('types/index.d.ts', t)
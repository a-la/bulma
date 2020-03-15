import { writeFileSync } from 'fs'
import { compileStylesheetsSync } from 'closure-stylesheets'
import path from 'closure-stylesheets-java'

// updated version to include /* alernate */
const { stylesheet, renameMap, status, stderr } = compileStylesheetsSync('bulma/bulma.css', {
  path,
  allowUnrecognizedProperties: true,
})

if (status) {
  const s = stderr.replace(/ at line ([\d,]+) column ([\d,]+):/g, (m, l, c) => {
    const ln = l.replace(/[^\d]/, '')
    const cl = c.replace(/[^\d]/, '')
    return `:${ln}:${cl} :`
  })
  console.log(s)
} else {
  const bootstrapMap = Object.keys(renameMap).reduce((acc, key) => {
    acc[key] = true
    return acc
  }, {})
  writeFileSync('bulma/bulma.json', JSON.stringify(bootstrapMap, null, 2))
}
// console.log(renameMap)
import { c } from 'erte'

/**
 * @type {_bulma.bulma}
 */
export default async function bulma(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return ''
  console.log('@a-la/bulma called with %s', c(text, 'yellow'))
  return text
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').bulma} _bulma.bulma
 */

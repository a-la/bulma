const { _bulma } = require('./bulma')

/**
 * Bulma Class Properties And Types Definitions For JSX.
 * @param {!_bulma.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function bulma(config) {
  return _bulma(config)
}

module.exports = bulma

/* typal types/index.xml namespace */
/**
 * @typedef {_bulma.Config} Config `＠record` Options for the program.
 * @typedef {Object} _bulma.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */

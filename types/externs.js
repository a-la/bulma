/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _bulma = {}
/**
 * Options for the program.
 * @record
 */
_bulma.Config
/**
 * A boolean option. Default `true`.
 * @type {boolean|undefined}
 */
_bulma.Config.prototype.shouldRun
/**
 * A text to return.
 * @type {string|undefined}
 */
_bulma.Config.prototype.text

/* typal types/api.xml externs */
/**
 * Bulma Class Properties And Types Definitions For JSX.
 * @typedef {function(!_bulma.Config): !Promise<string>}
 */
_bulma.bulma

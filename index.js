// @ts-check
var react = require('react')
module.exports = function UseStateRef(defaultValue) {
	var [state, setState] = react.useState(defaultValue)
	var ref = react.useRef(defaultValue)
	ref.current = state
	return [
		state,
		function (newValue) {
			ref.current = newValue
			return setState(newValue)
		},
		ref
	]
}
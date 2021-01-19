//@ts-check
var React = require('react');

module.exports = function useStateRef(defaultValue) {
    var [state, setState] = React.useState(defaultValue);

	var ref = React.useRef(defaultValue);
	ref.current = state;

    return [ state, setState, ref ];
};
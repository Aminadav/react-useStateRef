//@ts-check
var React = require('react');

module.exports = function useStateRef(defaultValue) {
    var [state, setState] = React.useState(defaultValue);

    var ref = React.useRef(defaultValue);
    React.useEffect(() => (ref.current = state), [state]);  

    return [ state, setState, ref ];
};
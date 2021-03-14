// @ts-check
var React = require('react');

module.exports = function useStateRef(defaultValue) {
  var [state, setState] = React.useState(defaultValue);
  var ref = React.useRef(defaultValue);

  var dispatch = React.useCallback(function(val) {
    ref.current = typeof val === "function" ?
    val(ref.current) : val;

    setState(val);
  }, []);

  return [state, dispatch, ref];
};
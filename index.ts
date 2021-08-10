import { useCallback, useRef, useState, SetStateAction, MutableRefObject, Dispatch } from "react";

const isFunction = <S>(setStateAction: SetStateAction<S>): setStateAction is (prevState: S) => S =>
  typeof setStateAction === "function";

function useStateRef<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>, MutableRefObject<S>];

function useStateRef<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
  MutableRefObject<S | undefined>
];

function useStateRef<S>(initialState?: S | (() => S)) {
  const [state, setState] = useState(initialState);
  const ref = useRef(state);

  const dispatch: Dispatch<SetStateAction<S | undefined>> = useCallback(setStateAction => {
    ref.current = isFunction(setStateAction) ? setStateAction(ref.current) : setStateAction;

    setState(ref.current);
  }, []);

  return [state, dispatch, ref];
}

export = useStateRef;

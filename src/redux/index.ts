import { applyMiddleware, compose, createStore } from "redux";
import thunk, { ThunkAction, ThunkMiddleware } from "redux-thunk";

import { MainSettings } from "src/types";
import { reducers } from "src/redux/reducers";
import { useMemo } from "react";

export type Actions = {
  type: "UPDATE_SETTINGS";
  payload: Partial<MainSettings>;
};

export type RootState = ReturnType<typeof reducers>;

let composeEnhancers = compose;

if (typeof window !== "undefined") {
  composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

function initStore(initialState: RootState) {
  return createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk as ThunkMiddleware<RootState, Actions>),
    ),
  );
}

let store: ReturnType<typeof initStore> | undefined;

export const initializeStore = (preloadedState: RootState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: RootState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

export type Reducer<T> = (state: T, action: Actions) => T;
export type ThunkResult<R = void> = ThunkAction<
  R,
  RootState,
  undefined,
  Actions
>;

export type AppDispatch = ReturnType<typeof initializeStore>["dispatch"];

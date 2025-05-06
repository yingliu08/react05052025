import { LOADING_END, LOADING_START, LOADING_TOGGLE } from "../actionTypes";

type LoadingActionType =
  | typeof LOADING_TOGGLE
  | typeof LOADING_START
  | typeof LOADING_END;

export interface LoadingAction {
  type: LoadingActionType;
}

export type LoadingState = boolean;

export default function loadingReducer(
  loading: LoadingState = false,
  action: LoadingAction
) {
  switch (action.type) {
    case LOADING_TOGGLE:
      return !loading;
    case LOADING_START:
      return true;
    case LOADING_END:
      return false;
    default:
      return loading;
  }
}

export const toggleLoadingAction = (): LoadingAction => ({
  type: LOADING_TOGGLE,
});

export const startLoadingAction = (): LoadingAction => ({
  type: LOADING_START,
});

export const endLoadingAction = (): LoadingAction => ({
  type: LOADING_END,
});

import { EnthusiasmAction } from '../actions'
import { StoreState } from '../types'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants'

/* export type Reducer<S> = (
 *   state: StoreState,
 *   action: EnthusiasmAction
 * ) => StoreState
 *  */
export function enthusiasm(
  state: StoreState = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
  },
  action: EnthusiasmAction
): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 }
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1),
      }
  }
  return state
}

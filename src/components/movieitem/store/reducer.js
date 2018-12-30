import { fromJS } from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
  id: 0
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionType.CHANGE_ID:
      return state.set('id', action.id);
    default:
      return state;
  }
}
import * as actionType from './actionType';

export const focusedChange = (index) => ({
  type: actionType.FOCUSED_CHANGE,
  index
})
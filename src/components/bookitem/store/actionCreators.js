import { fromJS } from 'immutable';
import * as actionType from './actionType';

export const changeId = (id) => ({
  type: actionType.CHANGE_ID,
  id
})
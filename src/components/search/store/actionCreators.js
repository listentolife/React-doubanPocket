import { fromJS } from 'immutable';
import * as actionType from './actionType';
import * as request from '../../../request';

export const changeKeyword = (value) => ({
  type: actionType.CHANGE_KEYWORD,
  value
});

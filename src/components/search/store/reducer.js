import { fromJS } from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
  placeHolders: {
    'book': '书名、作者、ISBN',
    'movie': '电影、影人、影院、电视剧',
    'music': '唱片名、表演者、条码、ISRC'
  },
  keyword: ''
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionType.CHANGE_KEYWORD:
      return state.set('keyword', action.value);
  }
  return state;
}
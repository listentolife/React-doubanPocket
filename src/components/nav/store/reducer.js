import { fromJS } from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
  list: [
    {
      path: '/book',
      text: '图书',
      icon: 'icon-shubenshuqian',
      focused: true
    },
    {
      path: '/movie',
      text: '电影',
      icon: 'icon-dianying',
      focused: false
    },
    {
      path: '/music',
      text: '音乐',
      icon: 'icon-yinle1',
      focused: false
    }
  ]
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionType.FOCUSED_CHANGE:
      const newList = state.get('list').toJS();
      const len = newList.length;
      for (let i = 0; i < len ; i++) {
        if (i === action.index) {
          newList[i].focused = true;
        } else {
          newList[i].focused = false;
        }
      }
      return state.set('list', fromJS(newList));
    default:
      return state;
  }
}
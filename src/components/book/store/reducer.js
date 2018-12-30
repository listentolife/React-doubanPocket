import { fromJS } from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
  bookList: [],
  bookKey: -1,
  currentPage: 0,
  totalPage: 0,
  keyword: ''
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionType.CHANGE_LIST:
      {
        const bookList = state.get('bookList');
        let newBookList = bookList.toJS();
        console.log('reducer.CHANGE_LIST - bookList.toJS():', newBookList);
        const newCurrentPage = ((action.start - 1) / 20) + 1
        const newTotalPage = Math.ceil(action.total / 20);
        newBookList = newBookList.concat(action.bookList);
        console.log('reducer.CHANGE_LIST - newBookList:', newBookList);
        state = state.set('bookList', fromJS(newBookList));
        state = state.set('totalPage', newTotalPage);
        state = state.set('currentPage', newCurrentPage);
        return state;
      }
    case actionType.CHANGE_KEYWORD:
      state = state.set('bookList', fromJS([]));
      return state.set('keyword', action.newKeyword);
    default:
      return state;
  }
}
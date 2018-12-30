import { fromJS } from 'immutable'
import * as actionType from './actionType'
import { BookList } from '../../book/style';

const defaultState = fromJS({
  movieList: [],
  currentPage: 0,
  totalPage: 0,
  keyword: ''
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionType.CHANGE_LIST:
      {
        const movieList = state.get('movieList');
        let newMovieList = movieList.toJS();
        console.log('reducer.CHANGE_LIST - movieList.toJS():', newMovieList);
        const newCurrentPage = ((action.start - 1) / 20) + 1;
        const newTotalPage = Math.ceil(action.total / 20);
        newMovieList = newMovieList.concat(action.movieList);
        console.log('reducer.CHANGE_LIST - newMovieList:', newMovieList);
        state = state.set('movieList', fromJS(newMovieList));
        state = state.set('totalPage', newTotalPage);
        state = state.set('currentPage', newCurrentPage);
        return state;
      }
    case actionType.CHANGE_KEYWORD:
      state = state.set('movieList', fromJS([]));
      return state.set('keyword', action.newKeyword);
    default:
      return state;
  }
}
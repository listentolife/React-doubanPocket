import { fromJS } from 'immutable';
import * as actionType from './actionType';
import * as request from '../../../request';

const hasGetMovieList = (res) => ({
  type: actionType.CHANGE_LIST,
  movieList: res.subjects,
  total: res.total,
  start: res.start
});

export const getMovieData = (start, count) => ((dispatch) => {
  request.get('/api/movie/in_theaters',{start:start,count:count}).then((res)=>{
    console.log(res);
    dispatch(hasGetMovieList(res));
  })
});

export const getSearchData = (keyword, start, count) => ((dispatch) => {
  request.get('/api/movie/search', {q:keyword,start:start,count:count}).then((res) => {
    dispatch(hasGetMovieList(res));
  })
});

export const getKeyword = (newKeyword) => ({
  type: actionType.CHANGE_KEYWORD,
  newKeyword
})

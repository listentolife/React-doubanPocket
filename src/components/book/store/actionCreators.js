import { fromJS } from 'immutable';
import * as actionType from './actionType';
import * as request from '../../../request';

const hasGetBookList = (res) => ({
  type: actionType.CHANGE_LIST,
  bookList: res.books,
  total: res.total,
  start: res.start
});

export const getBookData = (tag, start, count) => ((dispatch) => {
  request.get('/api/book/search', {tag:tag,start:start,count:count}).then((res) => {
    dispatch(hasGetBookList(res));
  })
});

export const getSearchData = (keyword, start, count) => ((dispatch) => {
  request.get('/api/book/search', {q:keyword,start:start,count:count}).then((res) => {
    dispatch(hasGetBookList(res));
  })
});

export const getKeyword = (newKeyword) => ({
  type: actionType.CHANGE_KEYWORD,
  newKeyword
})
import { fromJS } from 'immutable';
import * as actionType from './actionType';
import * as request from '../../../request';

const hasGetMusicList = (res) => ({
  type: actionType.CHANGE_LIST,
  musicList: res.musics,
  total: res.total,
  start: res.start
});

export const getMusicData = (tag, start, count) => ((dispatch) => {
  request.get('/api/music/search',{tag:tag,start:start,count:count}).then((res)=>{
    dispatch(hasGetMusicList(res));
  })
});

export const getSearchData = (keyword, start, count) => ((dispatch) => {
  request.get('/api/music/search', {q:keyword,start:start,count:count}).then((res) => {
    dispatch(hasGetMusicList(res));
  })
});

export const getKeyword = (newKeyword) => ({
  type: actionType.CHANGE_KEYWORD,
  newKeyword
})
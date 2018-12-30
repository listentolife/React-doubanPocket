import { fromJS } from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
  musicList: [],
  musicKey: -1,
  currentPage: 0,
  totalPage: 0,
  keyword: ''
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionType.CHANGE_LIST:
      {
        const musicList = state.get('musicList');
        let newMusicList = musicList.toJS();
        console.log('reducer.CHANGE_LIST - musicList.toJS():', newMusicList);
        const newCurrentPage = ((action.start - 1) / 20) + 1
        const newTotalPage = Math.ceil(action.total / 20);
        newMusicList = newMusicList.concat(action.musicList);
        console.log('reducer.CHANGE_LIST - newMusicList:', newMusicList);
        state = state.set('musicList', fromJS(newMusicList));
        state = state.set('totalPage', newTotalPage);
        state = state.set('currentPage', newCurrentPage);
        return state;
      }
    case actionType.CHANGE_KEYWORD:
      state = state.set('musicList', fromJS([]));
      return state.set('keyword', action.newKeyword);
    default:
      return state;
  }
}
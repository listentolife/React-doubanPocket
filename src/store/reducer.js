import { combineReducers } from 'redux-immutable';
import { reducer as navReducer } from '../components/nav/store';
import { reducer as bookReducer } from '../components/book/store';
import { reducer as bookItemReducer } from '../components/bookitem/store';
import { reducer as movieReducer } from '../components/movie/store';
import { reducer as movieItemReducer } from '../components/movieitem/store';
import { reducer as musicReducer } from '../components/music/store';
import { reducer as searchReducer } from '../components/search/store';

const reducer =  combineReducers({
  nav: navReducer,
  book: bookReducer,
  bookItem: bookItemReducer,
  movie: movieReducer,
  movieItem: movieItemReducer,
  music: musicReducer,
  search: searchReducer
});

export default reducer;
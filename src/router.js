import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Movie from './components/movie';
import Music from './components/music';
import Book from './components/book';
import BookItem from './components/bookitem';
import MovieItem from './components/movieitem';
import MusicItem from './components/musicitem';

export const Routes = (
	<Switch>
    {/* 只渲染命中的第一个Route */}  
		<Route path='/' exact component={Book}></Route>
		<Route path='/book' component={Book}></Route>
    <Route path='/movie' component={Movie}></Route>
		<Route path='/music' component={Music}></Route>
    <Route path='/bookDetails/:id' component={BookItem}></Route>
    <Route path='/movieDetails/:id' component={MovieItem}></Route>
    <Route path='/musicDetails/:id' component={MusicItem}></Route>
	</Switch>
);


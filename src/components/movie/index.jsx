import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  MovieWrapper,
  MovieList,
  MoviePic,
  MovieDesc,
  MovieTitle,
  GenresWrapper,
  GenresItem,
  Casts,
  MovieAverage,
  PullDown,
  PullUp
} from './style';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import Wait from '../wait';
import Search from '../search';
import * as Contants from '../../store/constants';


class Movie extends Component {
  constructor (props) {
    super(props);
    this.getSearchInfo = this.getSearchInfo.bind(this);
    this.handleLoadData = this.handleLoadData.bind(this);
  }

  render () {
    return (
      <Fragment>
        <Search 
          page={Contants.Movie}
          searchInfo={this.getSearchInfo}
        ></Search>
        <MovieWrapper>
          {
            this.show()
          }
        </MovieWrapper>
      </Fragment>
    )
  }

  componentDidMount () {

    const { movieList, getMovieLists, currentPage, totalPage } = this.props;
    console.log('componentDidMount() - movieList.size:', movieList.size)
    if (movieList.size === 0) {
      getMovieLists(currentPage, totalPage);
    }
  }

  /**
   * fn show()
   * 判断展示加载状态还是展示电影列表
   * return {Component} <Wait /> or {fn} this.showList
   */
  show () {
    const size = this.props.movieList.size;
    if (size === 0) {
      return (<Wait />);
    } else {
      return (
        <ul>
          {this.showList()}
        </ul>
      )
    }
  }

  /**
   * fn showList()
   * 实现电影列表html代码
   * return {String} htmlList 
   */
  showList () {
    const { movieList, handleGetKey, currentPage, totalPage } = this.props;
    const movieListJS = movieList.toJS();
    const htmlList = [];
    const len = movieListJS.length;

    if (len !== 0) {
      for (let i = 0; i < len; i++) {
        htmlList.push(
          <Link to={`/movieDetails/${i}`} key={i}>
            <MovieList>
              <MoviePic><img src={movieListJS[i].images.small} /></MoviePic>
              <MovieDesc>
                <MovieTitle>
                  {movieListJS[i].title} - {movieListJS[i].year}
                </MovieTitle>
                <GenresWrapper>
                  {
                    this.showGenres(movieListJS[i].genres)
                  }
                </GenresWrapper>
                <Casts>
                  {
                    movieListJS[i].casts ? (
                      movieListJS[i].casts.map((item) => {
                        return item.name + ' '
                      })
                    ) : ''
                  }
                </Casts>
                <MovieAverage>评分: {movieListJS[i].rating.average}</MovieAverage>
              </MovieDesc>
            </MovieList>
          </Link>
        )
      }
      if (currentPage !== 0 && (currentPage >= totalPage)) {
        htmlList.push(<PullUp key="pullUp">加载完毕</PullUp>);
      } else {
        htmlList.push(<PullUp key='pullUp' onClick={this.handleLoadData}>加载更多</PullUp>);
      }
      return htmlList;
    }
  }

  /**
   * fn showGenres()
   * 实现标签的html代码
   * @param {Object} genres 
   * return {String} htmlGenres 
   */
  showGenres (genres) {
    const len = genres.length;
    const count = (len > 5) ? 5 : len;
    const htmlGenres = [];
    for (let i = 0; i < count; i++) {
      htmlGenres.push(
        <GenresItem key={genres[i]}>
          {genres[i]}
        </GenresItem>
      )
    }
    return htmlGenres;
  }

  /**
   * fn handleLoadData()
   * 加载新的电影列表
   */
  handleLoadData () {
    const { getMovieLists, currentPage, totalPage, keyword, getSearchMovieLists } = this.props;
    console.log('handleLoadData() - currentPage', currentPage);
    if (keyword === '') {
      getMovieLists(currentPage, totalPage);
    } else {
      getSearchMovieLists(keyword, currentPage);
    }
  }
  
  /**
   * fn getSearchInfo()
   * 获取搜索词的电影列表
   * @param {String} newKeyword 
   */
  getSearchInfo (newKeyword) {
    const { getSearchKeyword, getSearchMovieLists, keyword } = this.props;
    if (keyword !== newKeyword) {
      getSearchKeyword(newKeyword);
      getSearchMovieLists(newKeyword, 0);
      window.scrollTo(0,0);
    }
  }
}

/**
 * mapStateToProps
 * 建立组件跟 store 的 state 的映射关系
 * @param {immutable object} state 
 */
const mapStateToProps = (state) => {
  return {
    movieList: state.getIn(['movie', 'movieList']),
    currentPage: state.getIn(['movie', 'currentPage']),
    totalPage: state.getIn(['movie', 'totalPage']),
    keyword: state.getIn(['movie', 'keyword'])
  }
}

/**
 * mapDispatchToProps
 * 用于建立组件跟store.dispatch的映射关系
 * @param dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    getMovieLists(currentPage, totalPage) {
      if(currentPage === 0 || (currentPage < totalPage)) {
        dispatch(actionCreators.getMovieData((currentPage * 20 + 1), 20));
      }
    },
    getSearchKeyword (newKeyword) {
      dispatch(actionCreators.getKeyword(newKeyword));
    },
    getSearchMovieLists (keyword, currentPage) {
      dispatch(actionCreators.getSearchData(keyword, (currentPage * 20 + 1), 20));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
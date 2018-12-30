import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  BookWrapper,
  BookList,
  BookPic,
  BookDesc,
  BookTitle,
  TagWrapper,
  TagItem,
  BookAuthor,
  BookAverage,
  BookPubdate,
  BookDetail,
  PullDown,
  PullUp
} from './style';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import Wait from '../wait';
import Search from '../search';
import BookItem from '../bookitem';
import * as Contants from '../../store/constants';

class Book extends Component {
  constructor (props) {
    super(props);
    this.getSearchInfo = this.getSearchInfo.bind(this);
    this.handleLoadData = this.handleLoadData.bind(this);
    // this.handleScroll = this.handleScroll.bind(this);
  }

  render () {
    return (
      <Fragment>
        <Search 
          page={Contants.Book}
          searchInfo={this.getSearchInfo}
        ></Search>
        <BookWrapper>
            {
              this.show()
            }
        </BookWrapper>
      </Fragment>
    )
  }

  componentDidMount () {
    const { bookList, getBookLists, currentPage, totalPage } = this.props;
    console.log('componentDidMount() - bookList.size:', bookList.size)
    if (bookList.size === 0) {
      getBookLists(currentPage, totalPage);
    }
  }
/*
  componentDidUpdate () {
    console.log(window.innerWidth, window.innerHeight);
    console.log(this.bookWrapper);
    console.log(document.querySelector(`.${this.bookWrapper.state.generatedClassName}`).offsetHeight);
  }*/


  /**
   * fn show()
   * 判断展示加载状态还是展示图书列表
   * return {Component} <Wait /> or {fn} this.showList
   */
  show () {
    const size = this.props.bookList.size;
    console.log('show() - size:', size);
    if (size === 0) {
      return (<Wait />);
    } else {
      return (
        <ul id={'innerWrapper'}>
          {this.showList()}
        </ul>
      )
    }
  }

  /**
   * fn showList()
   * 实现图书列表html代码
   * return {String} htmlList 
   */
  showList () {
    const { bookList, handleGetKey, currentPage, totalPage } = this.props;
    const bookListJS = bookList.toJS();
    const htmlList = [];
    const len = bookListJS.length;

    if (len !== 0) {
      for (let i = 0; i < len; i++) {
        htmlList.push(
          <Link to={`/bookDetails/${i}`} key={i}>
            <BookList>
              <BookPic><img src={bookListJS[i].images.small} /></BookPic>
              <BookDesc>
                <BookTitle>名称: {bookListJS[i].title}</BookTitle>
                <TagWrapper>
                  {
                    this.showTags(bookListJS[i].tags)
                  }
                </TagWrapper>
                <BookAuthor>作者: {
                    bookListJS[i].author ? bookListJS[i].author : ''
                  }
                </BookAuthor>
                <BookAverage>评分: {bookListJS[i].rating.average}</BookAverage>
                <BookPubdate>时间: {bookListJS[i].pubdate}</BookPubdate>
              </BookDesc>
            </BookList>
          </Link>
        );
      }
    }
    console.log('showList() - currentPage, totalPage:',currentPage, totalPage);
    if (currentPage !== 0 && (currentPage >= totalPage)) {
      htmlList.push(<PullUp key="pullUp">加载完毕</PullUp>);
    } else {
      htmlList.push(<PullUp key='pullUp' onClick={this.handleLoadData}>加载更多</PullUp>);
    }
    return htmlList;
  }

  /**
   * fn showTags()
   * 实现标签的html代码
   * @param {Object} tags 
   * return {String} htmlTags 
   */
  showTags (tags) {
    const len = tags.length;
    const count = (len > 5) ? 5 : len;
    const htmlTags = [];
    for (let i = 0; i < count; i++) {
      htmlTags.push(
        <TagItem key={i}>
          {tags[i].name}
        </TagItem>
      )
    }
    return htmlTags;
  }

  

  /**
   * fn handleLoadData()
   * 加载新的图书列表
   */
  handleLoadData () {
    const { bookList, getBookLists, currentPage, totalPage, keyword, getSearchBookLists } = this.props;
    console.log('handleLoadData() - currentPage', currentPage);
    if (keyword === '') {
      getBookLists(currentPage, totalPage);
    } else {
      getSearchBookLists(keyword, currentPage);
    }
  }

  /**
   * fn getSearchInfo()
   * 获取搜索词的图书列表
   * @param {String} newKeyword 
   */
  getSearchInfo (newKeyword) {
    const { getSearchKeyword, getSearchBookLists, keyword } = this.props;
    if (keyword !== newKeyword) {
      getSearchKeyword(newKeyword);
      getSearchBookLists(newKeyword, 0);
      // window.scrollTo(0,0);
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
    bookList: state.getIn(['book', 'bookList']),
    currentPage: state.getIn(['book', 'currentPage']),
    totalPage: state.getIn(['book', 'totalPage']),
    keyword: state.getIn(['book', 'keyword'])
  }
}

/**
 * mapDispatchToProps
 * 用于建立组件跟store.dispatch的映射关系
 * @param dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    getBookLists (currentPage, totalPage, tag = 'novel') {
      if(currentPage === 0 || (currentPage < totalPage)) {
        dispatch(actionCreators.getBookData(tag, (currentPage * 20 + 1), 20));
      }
    },
    getSearchKeyword (newKeyword) {
      dispatch(actionCreators.getKeyword(newKeyword));
    },
    getSearchBookLists (keyword, currentPage) {
      dispatch(actionCreators.getSearchData(keyword, (currentPage * 20 + 1), 20));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
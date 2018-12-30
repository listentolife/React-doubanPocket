import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  MusicWrapper,
  MusicList,
  MusicPic,
  MusicDesc,
  MusicTitle,
  MusicAuthor,
  MusicAverage,
  PullDown,
  PullUp
} from './style';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import Wait from '../wait';
import Search from '../search';
import MusicItem from '../musicitem';
import * as Contants from '../../store/constants';


class Music extends Component {
  constructor (props) {
    super(props);
    this.getSearchInfo = this.getSearchInfo.bind(this);
    this.handleLoadData = this.handleLoadData.bind(this);
  }
  
  render () {
    return (
      <Fragment>
        <Search 
          page={Contants.Music}
          searchInfo={this.getSearchInfo}
        ></Search>
        <MusicWrapper>
          {
            this.show()
          }
        </MusicWrapper>
      </Fragment>
    )
  }
  
  componentDidMount () {
    const { musicList, getMusicLists, currentPage, totalPage } = this.props;
    console.log('componentDidMount() - MusicList.size:', musicList.size)
    if (musicList.size === 0) {
      getMusicLists(currentPage, totalPage);
    }
  }

  /**
   * fn show()
   * 判断展示加载状态还是展示图书列表
   * return {Component} <Wait /> or {fn} this.showList
   */
  show () {
    const size = this.props.musicList.size;
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
   * 实现图书列表html代码
   * return {String} htmlList 
   */
  showList () {
    const { musicList, handleGetKey, currentPage, totalPage } = this.props;
    const musicListJS = musicList.toJS();
    const htmlList = [];
    const len = musicListJS.length;
    
    if (len !== 0) {
      for (let i = 0; i < len; i++) {
        htmlList.push(
          <Link to={{ pathname:`/musicDetails/${musicListJS[i].title}`, state:{item: musicListJS[i]} }} key={i}>
            <MusicList>
              <MusicPic><img src={musicListJS[i].image} /></MusicPic>
              <MusicDesc>
                <MusicTitle>名称: {musicListJS[i].title}</MusicTitle>
                <MusicAuthor>作者: {
                  musicListJS[i].author ? (
                    musicListJS[i].author.map((item) => {
                      return item.name + ' '
                    })
                  ) : ''
                }</MusicAuthor>
                <MusicAverage>评分: {musicListJS[i].rating.average}</MusicAverage>
              </MusicDesc>
            </MusicList>
          </Link>
        );
      }
    }
    if (currentPage !== 0 && (currentPage >= totalPage)) {
      htmlList.push(<PullUp key="pullUp">加载完毕</PullUp>);
    } else {
      htmlList.push(<PullUp key='pullUp' onClick={this.handleLoadData}>加载更多</PullUp>);
    }
    return htmlList;
  }

  /**
   * fn handleLoadData()
   * 加载新的图书列表
   */
  handleLoadData () {
    const { musicList, getMusicLists, currentPage, totalPage, keyword, getSearchMusicLists } = this.props;
    if (keyword === '') {
      getMusicLists(currentPage, totalPage);
    } else {
      getSearchMusicLists(keyword, currentPage);
    }
  }

  /**
   * fn getSearchInfo()
   * 获取搜索词的图书列表
   * @param {String} newKeyword 
   */
  getSearchInfo (newKeyword) {
    const { getSearchKeyword, getSearchMusicLists, keyword } = this.props;
    if (keyword !== newKeyword) {
      getSearchKeyword(newKeyword);
      getSearchMusicLists(newKeyword, 0);
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
    musicList: state.getIn(['music', 'musicList']),
    currentPage: state.getIn(['music', 'currentPage']),
    totalPage: state.getIn(['music', 'totalPage']),
    keyword: state.getIn(['music', 'keyword'])
  }
}

/**
 * mapDispatchToProps
 * 用于建立组件跟store.dispatch的映射关系
 * @param dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    getMusicLists (currentPage, totalPage, tag = '流行') {
      if(currentPage === 0 || (currentPage < totalPage)) {
        dispatch(actionCreators.getMusicData(tag, (currentPage * 20 + 1), 20));
      }
    },
    getSearchKeyword (newKeyword) {
      dispatch(actionCreators.getKeyword(newKeyword));
    },
    getSearchMusicLists (keyword, currentPage) {
      dispatch(actionCreators.getSearchData(keyword, (currentPage * 20 + 1), 20));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);
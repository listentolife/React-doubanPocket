import React, { Component } from 'react';
import { 
  SearchWrapper,
  SearchIcon,
  SearchInput,
  SearchButton
} from './styled';
import { connect } from 'react-redux';
import { actionCreators } from '../search/store';

class Search extends Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  showPlaceHolder () {
    const { placeHolders, page } = this.props;
    const placeHoldersJS = placeHolders.toJS();
    return placeHoldersJS[page];
  }

  handleInputChange (e) {
    const value = e.target.value;
    this.props.changeInputValue(value);
  }

  handleClick () {
    const { searchInfo, keyword, changeInputValue } = this.props;
    if (keyword != '') {
      searchInfo(keyword);
      changeInputValue('');
    }
  }

  render () {
    return (
      <SearchWrapper>
        <div>
          <SearchIcon><i className={'iconfont icon-fangdajing'}></i></SearchIcon>
          <SearchInput 
            value={this.props.keyword}
            placeholder={this.showPlaceHolder()}
            onChange={this.handleInputChange}
          ></SearchInput>
          <SearchButton
            onClick={this.handleClick}
          >搜索</SearchButton>
        </div>
      </SearchWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    placeHolders: state.getIn(['search', 'placeHolders']),
    keyword: state.getIn(['search', 'keyword'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue (value) {
      dispatch(actionCreators.changeKeyword(value));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
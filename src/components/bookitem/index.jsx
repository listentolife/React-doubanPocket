import React, { Component } from 'react';
import { 
  OutsideItemWrapper,
  ItemWrapper,
  PageHeader,
  BackBtn,
  PageTitle,
  DetailInfo,
  DetailPic,
  DetailDec,
  BookTitle,
  BookAuthor,
  BookPublisher,
  BookPubdate,
  BookAverage,
  BookPrice,
  BookTag,
  Catalog,
  Summary
} from './styled';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { connect } from 'react-redux';

class BookItem extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render () {
    const { bookList, id } = this.props;
    const bookListJS = bookList.toJS();
    const bookData = bookListJS[id];
    return (
        <OutsideItemWrapper>
          <ItemWrapper>
            <PageHeader>
              <PageTitle>{bookData.title}</PageTitle>
              <BackBtn onClick={this.handleClick}>
                <i className={'iconfont icon-htmal5icon37'}></i>
                <span>图书</span></BackBtn>
            </PageHeader>
            <DetailInfo>
              <DetailPic>
                <img src={bookData.images.small} />
              </DetailPic>
              <DetailDec>
                <BookTitle>名称: {bookData.title}</BookTitle>
                <BookAuthor>作者: {
                  bookData.author ? bookData.author : ''
                }</BookAuthor>
                <BookPublisher>出版社: {bookData.publisher}</BookPublisher>
                <BookPubdate>日期: {bookData.pubdate}</BookPubdate>
                <BookAverage>评分: {bookData.rating.average}</BookAverage>
                <BookPrice>价钱: {bookData.price}</BookPrice>
                <BookTag></BookTag>
              </DetailDec>
            </DetailInfo>
            <Catalog>
              <h3>序言</h3>
              <p>{bookData.catalog || '(无)'}</p>
            </Catalog>
            <Summary>
              <h3>简介</h3>
              <p>{bookData.summary || '(无)'}</p>
            </Summary>
          </ItemWrapper>
        </OutsideItemWrapper>
    )
  }

  componentDidMount () {
    this.props.getId(this.props.match.params.id);
    window.scrollTo(0,0);
  }




  

  handleClick () {
    this.props.history.goBack();
  }
}


const mapStateToProps = (state) => {
  return {
    id: state.getIn(['bookItem', 'id']),
    bookList: state.getIn(['book', 'bookList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getId (id) {
      dispatch(actionCreators.changeId(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
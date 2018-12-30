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
  MusicTitle,
  MusicAuthor,
  MusicPublisher,
  MusicPubdate,
  MusicAverage,
  TagItem,
  Catalog,
  Summary
} from './styled';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { connect } from 'react-redux';

class MusicItem extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render () {
    const item = this.props.location.state.item;
    console.log(item);
    return (
        <OutsideItemWrapper>
          <ItemWrapper>
            <PageHeader>
              <PageTitle>{item.title}</PageTitle>
              <BackBtn onClick={this.handleClick}>
                <i className={'iconfont icon-htmal5icon37'}></i>
                <span>音乐</span></BackBtn>
            </PageHeader>
            <DetailInfo>
              <DetailPic>
                <img src={item.image} />
              </DetailPic>
              
              <DetailDec>
                <MusicTitle>
                  <span>名称: {item.title}</span>
                  {this.showtag(item.tags)}
                </MusicTitle>
                <MusicAuthor>作者: {
                  item.author.map((authorItem) => {
                    return (authorItem.name + ' ');
                  })
                }</MusicAuthor>
                <MusicPublisher>发布商: {item.attrs.publisher}</MusicPublisher>
                <MusicPubdate>发布时间: {item.attrs.pubdate}</MusicPubdate>
                <MusicAverage>评分: {item.rating.average}</MusicAverage>
              </DetailDec>
            </DetailInfo>
            <Catalog>
              <h3>简介</h3>
              <p>{item.title}</p>
            </Catalog>
            <Summary>
              <h3>简介</h3>
              <p>{
                item.attrs.tracks.map((trackItem) => {
                  return (trackItem + ' ');
                })
              }</p>
            </Summary>
          </ItemWrapper>
        </OutsideItemWrapper>
    )
  }

  componentDidMount () {
    window.scrollTo(0,0);
  }


  showtag(tags) {
    const len = tags.length;
    const htmlTags = [];
    for (let i = 0; i < len; i++) {
      htmlTags.push(
        <TagItem key={i}>
          {tags[i].name}
        </TagItem>
      )
    }
    return htmlTags;
  }

  

  handleClick () {
    this.props.history.goBack();
  }
}

export default MusicItem;
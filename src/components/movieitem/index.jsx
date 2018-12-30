import React, { Component } from 'react';
import { 
  OutsideItemWrapper,
  ItemWrapper,
  PageHeader,
  BackBtn,
  PageTitle,
  DetailPic,
  DetailDec,
  MovieTitle,
  GenresItem,
  PublishYear,
  MovieDirectors,
  MovieOriginalTitle,
  CastsWrapper,
  Cast
} from './styled';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { connect } from 'react-redux';

class MovieItem extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render () {
    const { movieList, id } = this.props;
    const movieListJS = movieList.toJS();
    const movieData = movieListJS[id];
    return (
        <OutsideItemWrapper>
          <ItemWrapper>
            <PageHeader>
              <PageTitle>{movieData.title}</PageTitle>
              <BackBtn onClick={this.handleClick}>
                <i className={'iconfont icon-htmal5icon37'}></i>
                <span>电影</span></BackBtn>
            </PageHeader>
            <DetailPic>
              <img src={movieData.images.small} />
            </DetailPic>
            <DetailDec>
              <h3>简介</h3>
              <MovieTitle>
                <span>名称: {movieData.title}</span>
                {this.showGenres(movieData.genres)}
              </MovieTitle>
              <PublishYear>上映时间: {movieData.year}</PublishYear>
              <MovieDirectors>导演: {
                movieData.directors.map((director) => {
                  return (director.name + ' ');
                })
              }</MovieDirectors>
              <MovieOriginalTitle>{`${movieData.title}(${movieData.original_title})`}</MovieOriginalTitle>
            </DetailDec>
            <CastsWrapper>
              <h3>演员</h3>
              <div>
                {
                  movieData.casts ? this.showCast(movieData.casts) : ' '
                }
              </div>
            </CastsWrapper>
          </ItemWrapper>
        </OutsideItemWrapper>
    )
  }

  componentDidMount () {
    console.log(this.props.id);
    this.props.getId(this.props.match.params.id);
    window.scrollTo(0,0);
  }




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

  showCast (casts) {
    console.log(casts);
    const len = casts.length;
    const castHtml = [];
    for (let i = 0; i < len; i++) {
      if (casts[i].avatars) {
        castHtml.push(
          <Cast key={casts[i].name}>
            <div><img src={casts[i].avatars.small} /></div>
            <p>{casts[i].name}</p>
          </Cast>
        )
      } else {
        castHtml.push(
          <Cast key={casts[i].name}>
            <div></div>
            <p>{casts[i].name}</p>
          </Cast>
        )
      }
      
    }
    return castHtml;
  }

  handleClick () {
    this.props.history.goBack();
  }
}


const mapStateToProps = (state) => {
  return {
    id: state.getIn(['movieItem', 'id']),
    movieList: state.getIn(['movie', 'movieList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getId (id) {
      dispatch(actionCreators.changeId(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
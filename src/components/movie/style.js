import styled from 'styled-components';

export const MovieWrapper = styled.div`
  position: relative;
  ul {
    margin: 0 15px;
    padding-top: 70px;
    padding-bottom: 14vh;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`
export const MovieList = styled.div`
  margin-bottom: 10px;
  border: 1px solid #dadada;
  overflow: hidden;
  display: flex;
`
export const MoviePic = styled.div`
  margin: 10px;
  img {
    width: 20vw;
  }
`
export const MovieDesc = styled.div`
  flex-grow: 1;
`
export const MovieTitle = styled.div`
  margin-top: 15px;
  overflow:hidden;  
  text-overflow:ellipsis;
  white-space:nowrap;
`
export const GenresWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
`
export const GenresItem = styled.div`
  justify-content: flex-start;
  margin: 0 5px 5px 0;
  padding: 4px 2px;
  background-color: #ef0000;
  color: #fff;
  font-size: 13px;
`
export const Casts = styled.div`
  color:#999;

  overflow:hidden;  
  text-overflow:ellipsis;
  white-space:nowrap;
`
export const MovieAverage = styled.div`
  margin-top: 5px;
`

export const PullDown = styled.p`
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: white;
  font-size: 13px;
`
export const PullUp = PullDown;

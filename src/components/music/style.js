import styled from 'styled-components';

export const MusicWrapper = styled.div`
  margin: 15px;
  padding-top: 11vh;
  padding-bottom: 14vh;
  overflow: hidden;
  a {
    text-decoration: none;
    color: #000;
  }
`

export const MusicList = styled.div`
  margin-bottom: 10px;
  border: 1px solid #dadada;
  overflow: hidden;
  display: flex;
`

export const MusicPic = styled.div`
  margin: 10px;
  img {
    width: 20vw;
  }
`

export const MusicDesc = styled.div`
  flex-grow: 1;
`

export const MusicTitle = styled.div`
  margin-top: 15px;
  overflow:hidden;  
  text-overflow:ellipsis;
  white-space:nowrap;
`

export const MusicAuthor = styled.p`
  margin-top: 5px;
  overflow:hidden;  
  text-overflow:ellipsis;
  white-space:nowrap;
`

export const MusicAverage = styled.div`
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
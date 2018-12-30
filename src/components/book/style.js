import styled from 'styled-components';

export const BookWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  overflow: auto;
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
export const BookList = styled.div`
  margin-bottom: 10px;
  border: 1px solid #dadada;
  overflow: hidden;
  display: flex;
  
`
export const BookPic = styled.div`
  margin: 10px;
  img {
    width: 20vw;
  }
`
export const BookDesc = styled.div`
  width: 55vw;
  flex-grow: 1;
`
export const BookTitle = styled.div`
  margin-top: 15px;
  overflow:hidden;  
  text-overflow:ellipsis;
  white-space:nowrap;
`
export const TagWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
`
export const TagItem = styled.div`
  justify-content: flex-start;
  margin: 0 5px 5px 0;
  padding: 4px 2px;
  background-color: #f3b600;
  color: #fff;
  font-size: 13px;
`
export const BookAuthor = styled.div`
  overflow: hidden;  
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const BookAverage = styled.div`
  margin-top: 5px;
`
export const BookPubdate = styled.div`
  margin: 5px 0 15px 0;
`

export const BookDetail = styled.div`
  position: relative;
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
import styled from 'styled-components';

export const OutsideItemWrapper = styled.div`
  top: 0;
  width: 100vw;
  height: 100vh;  
`
export const ItemWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  z-index: 500;
  background-color: #fff;
`

export const PageHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  background-color: #318dff;
  color: #fff;
  line-height: 50px;
`
export const BackBtn = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 15px;
  width: 70px;
`
export const PageTitle = styled.h1`
  position: absolute;
  left: 20vw;
  width: 60vw;
  text-align: center;
  font-size: 20px;

  overflow:hidden;  
  text-overflow:ellipsis;
  white-space:nowrap;
`
export const DetailInfo = styled.div`
  margin: 80px 15px 0 15px;
  padding-bottom: 15px;
  display: flex;
  border-bottom: 1px solid #dadada;
`
export const DetailPic = styled.div`
  margin-left: 15px;
  img {
    width: 25vw;
  }
`
export const DetailDec = styled.div`
  margin-left: 15px;
  font-size: 14px;
`

const DescItem = styled.div`
  margin-bottom: 6px;
`
export const MusicTitle = styled.div`
  margin-bottom: 6px;
  span {
    display: inline-block;
    margin: 2px;
    padding: 2px;
  }
`
export const MusicAuthor = DescItem
export const MusicPublisher = DescItem
export const MusicPubdate = DescItem
export const MusicAverage = DescItem

export const TagItem = styled.span`
  font-size: 12px;
  height: 14px;
  background-color: #f3b400;
  color: white;
`



export const Catalog = styled.div`
  margin: 15px;
  line-height: 20px;
  h3 {
    margin: 10px;
    font-size: 20px;
    font-weight: 600;
  }
  p {
    text-indent: 2em;
  }
`
export const Summary = Catalog


  

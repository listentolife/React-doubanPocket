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
export const DetailPic = styled.div`
  margin: 0 10px;
  padding: 80px 15vw 15px 15vw;
  border-bottom: 1px solid #dadada;
  img {
    width: 100%;
  }
`
export const DetailDec = styled.div`
  margin: 5px 15px;
  font-size: 14px;
  h3 {
    margin: 10px;
    font-size: 20px;
    font-weight: 600;
  }
`

export const MovieTitle = styled.div`
  margin: 0 0 6px 10px;
`

export const PublishYear = MovieTitle

export const GenresItem = styled.span`
  margin: 0 2px;
  padding: 0 2px;
  font-size: 12px;
  height: 14px;
  background-color: red;
  color: white;
`

export const MovieDirectors = MovieTitle

export const MovieOriginalTitle = MovieTitle

export const CastsWrapper = styled.div`
  margin: 5px 15px;
  h3 {
    margin: 10px;
    font-size: 20px;
    font-weight: 600;
  }
  > div {
    display: flex;
    justify-content: flex-center;
  }
`

export const Cast = styled.div`
  margin: 4vw 2vw 2vw 2vw;
  width: 29vw;
  display: flex;
  flex-direction: column;
  div {
    width: 100%;
    height: 38vw;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  p {
    margin-top: 5px;
    text-align: center;
  }
`


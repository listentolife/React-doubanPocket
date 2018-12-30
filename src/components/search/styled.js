import styled from 'styled-components';

const searchColor = '#848484'

export const SearchWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #fff;
  > div {
    display: inline-block;
    margin: 15px 15px 0 15px;
    border: 1px solid #dadada;
    display: flex;
  }
  
`
export const SearchIcon = styled.div`
  width: 10%;
  i {
    position: relative;
    left: 50%;
    margin-left: -15px;
    line-height: 50px;
    font-size: 30px;
    color: ${searchColor};
  }
`
export const SearchInput = styled.input`
  width: 75%;
  height: 50px;
  border: none;
  font-size: 16px;
  color: ${searchColor};
  outline: none;
`
export const SearchButton = styled.div`
  width: 15%;
  line-height: 50px;
  text-align: center;
  background-color: #318dff;
  color: #fff;
`
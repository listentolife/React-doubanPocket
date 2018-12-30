import styled from 'styled-components';

export const Navigator = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  height: 10vh;
  
  width: 100%;

  display: flex;
  justify-content: space-around;

  background-color: #eee;
`

export const NavItem = styled.li`
  list-style: none;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 33vw;
    color: #333;
    &.focused {
      color: #318dff;
    }
    &:active {
      color: #318dff;
    }
  }
  i {
    display: block;
    margin: 0 auto;
    font-size: 30px;
  }
`

export const ItemText = styled.p`
  display: block;
  font-size: 15px;
  margin: 3px auto;
`
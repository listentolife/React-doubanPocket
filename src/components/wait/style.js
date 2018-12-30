import styled from 'styled-components';

export const WaitWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 90vh;
  background-color: rgba(178, 178, 178, 0.3);

  z-index: 50;
`
export const WaitPopUp = styled.div`
  width: 200px;
  height: 100px;
  position: relative;
  top: 50vh;
  margin-top: -50px;
  left: 50vw;
  margin-left: -100px;
  border-radius: 10px;
  background-color: rgba(178, 178, 178, 0.6);
  display: flex;
  justify-content: center;
  h1 {
    margin: auto 25px;
    align-self: center;
    text-align: center;
  }
`
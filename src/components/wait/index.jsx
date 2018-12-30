import React, { Component } from 'react';
import {
  WaitWrapper,
  WaitPopUp
} from './style';

class Wait extends Component {
  render () {
    return (
      <WaitWrapper>
        <WaitPopUp>
          <h1>客官稍等片刻，数据加载中...</h1>
        </WaitPopUp>
      </WaitWrapper>
    )
  }
}

export default Wait; 
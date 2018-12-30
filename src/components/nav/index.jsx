import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Navigator,
  NavItem,
  ItemText
} from './styled';
import { actionCreators } from './store';

class Nav extends Component {

  showList () {
    const { list, handleChangeFocus } = this.props;
    const newList = list.toJS();
    const htmlList = [];
    const len = newList.length;

    for (let i = 0; i < len; i++) {
      const listItem = newList[i];
      htmlList.push(
        <NavItem key={i}>
            <Link 
              to={listItem.path} 
              className={listItem.focused ? 'focused' : ''}
              onClick={() => handleChangeFocus(i)}
            >
              <i className={'iconfont ' + listItem.icon}></i>
              <ItemText>{listItem.text}</ItemText>
            </Link>
          </NavItem>
      );
    }

    return htmlList;
  }

  render () {
    return (
      <Navigator>
        {
          this.showList()
        }
      </Navigator>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // state是一个map对象，需要用get()方法才可以获取属性
    // list: state.get('nav').list
    list: state.getIn(['nav', 'list'])
    // focused: state.getIn(['nav', 'focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeFocus (index) {
      dispatch(actionCreators.focusedChange(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);


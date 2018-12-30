import 'isomorphic-fetch';
import queryString from 'query-string';//查询字符串格式转换
import config from './config';

  export const get = (url, options) => { 
    if (options) {
      url+='?'+queryString.stringify(options);
      console.log(url)
    }
    return fetch(url)
      .then((response) => {
        return response.json();
      }).then(function(json) {
        return json;
      }).catch((err) => {
        console.log('parsing failed', err);
      })
  }

  export const post = (url, options) => {
    options = Object.assign(config.reqHeader, {
      body: JSON.stringify(options)
    });
  
    return fetch(url, options)
      .then((response) => {
        return response.json();
      }).then((json) => {
        return json;
      }).catch((err) => {
        console.log('post failed data:' + err);
      })
  }

import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1531917657960'); /* IE9*/
    src: url('./iconfont.eot?t=1531917657960#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1531917657960') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1531917657960#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-htmal5icon37:before { content: "\\e629"; }

  .icon-yinle1:before { content: "\\e6b1"; }

  .icon-fangdajing:before { content: "\\e6e4"; }

  .icon-jiazai:before { content: "\\e699"; }

  .icon-dianying:before { content: "\\e634"; }

  .icon-shubenshuqian:before { content: "\\e632"; }
`

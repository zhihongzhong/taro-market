import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/menu/index',
      'pages/shoppinglist/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      custom:false,
      color: "#000000",
      selectedColor: "#000000",
      list: [
        {
          pagePath: "pages/index/index",
          iconPath:"images/icon_home.png",
          selectedIconPath:"images/icon_home_selected.png"
        },
        {
          pagePath: "pages/menu/index",
          iconPath:"images/icon_menu.png",
          selectedIconPath:"images/icon_menu_selected.png"
        },
        {
          pagePath: "pages/shoppinglist/index",
          iconPath:"images/icon_shoppinglist.png",
          selectedIconPath:"images/icon_shoppinglist_selected.png"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

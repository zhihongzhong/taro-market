import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class ShoppingList extends Component {
  constructor(props) {
    super(props)
    
  }
  config={
    navigationBarTitleText: '购物车'
  }

  render() {
    return (
      <View>Shopping List</View>
    )
  }
}

export default ShoppingList

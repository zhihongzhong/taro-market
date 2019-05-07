import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {connect} from '@tarojs/redux'

@connect(({shoppinglist})=>({
  shoppinglist
}),(dispatch)=>({}))
class ShoppingList extends Component {
  constructor(props) {
    super(props)
    
  }
  config={
    navigationBarTitleText: '购物车'
  }

  render() {
    const {
      shoppinglist 
    } = this.props
    console.log(shoppinglist)
    return (
      <View>
      {
        shoppinglist.map((s)=>
        <View key={s.id}>
          <View>id:{s.id}</View>
          <View>title:{s.title}</View>
          <View>num:{s.num}</View>
        </View>
        )
      }
      </View>
    )
  }
}

export default ShoppingList

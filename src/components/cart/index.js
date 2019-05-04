import Taro, {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import "./index.scss";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const onClick = this.props.onClick;
    return (
      <View className='cart at-icon at-icon-shopping-cart' onClick = {onClick}></View>
    );
  }
}

export default Cart;
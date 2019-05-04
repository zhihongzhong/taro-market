import Taro, {Component} from '@tarojs/taro';
import {View,Text} from '@tarojs/components';



class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }

  onIncrement() {
    this.setState({
      num: this.state.num++
    })
  }

  onDecrement() {
    this.setState({
      num: this.state.num--
    });
  }

  render() {
    const num = this.props.num;
    const onDecrement = this.props.decrement;
    const onIncrement = this.props.increment;

    return (
      <View className="counter">
        <View className="decrement" onClick={this.onIncrement}>-</View>
        <Text className="display">{num}</Text>
        <View className="increment" onClick = {this.onDecrement}>+</View>
      </View>
    );
  }
}
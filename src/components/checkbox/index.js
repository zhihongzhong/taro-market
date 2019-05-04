import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/component'
import { PropTypes } from '@tarojs/components'


class Checkbox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    
  }
}


Checkbox.defaultProps = {
  checked: false,
  onCheck: () => {},
  id: 1,
  title: '马赛克 250g/包',
  
}
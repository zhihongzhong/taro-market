import Taro, { Component } from '@tarojs/taro'
import { View,Button } from '@tarojs/component'
import { PropTypes } from '@tarojs/components'
import './index.scss'

class Checkbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false
    }
  }

  onCheck() {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    const {
      checked
    } = this.state

    const checkBtnClass = {
      'check-btn': true,
      'check-btn-checked': checked
    }
    return (
      <View identity="checkbox-root">
        <View identity="checkbox-root__children-wrapper">
          <View identity="check-button-wrapper">

          </View>
          <View identity="check-content">
          {
            this.props.children && this.props.children
          }
          </View>
        </View>
      </View>
    )
  }
}


Checkbox.defaultProps = {
  checked: false,
  onCheck: () => {},
  id: 1,
  title: '马赛克 250g/包',
  
}

export default Checkbox
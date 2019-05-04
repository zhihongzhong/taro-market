import Taro, { Component } from '@tarojs/taro'
import { View,Button,Input } from '@tarojs/components'
import { PropTypes } from 'nervjs'
import classnames from 'classnames'
import './index.scss'

class Count extends Component {
  constructor(props) {
    super(props)
  }

  onBlur(event) {

    const {
      onChange
    } = this.props

    const value = event.detail.value
    // 出错处理
    value && onChange(parseInt(value))

  }

  render() {
    const {
      id,
      onPlus,
      onMinus,
      status
    } = this.props
    
    const rootClass = {
      'count-root': true
    }

    return (
    <View className={classnames(rootClass, this.props.className)}>
      <View className="count-root__wrapper">
        <Button className="btn minus" onClick = {onMinus}>-</Button>
        <Input type="number" value={status} onBlur={this.onBlur.bind(this)} className="input"/>
        <Button className="btn plus" onClick={onPlus}>+</Button>
      </View>
    </View>
    )
  }
}

Count.defaultProps = {
  id: 1,
  onPlus: (id) =>{},
  onMinus: (id) => {},
  onChange: (id) => console.log(id),
  status: 1
}

export default Count
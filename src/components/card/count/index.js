import Taro, { Component } from '@tarojs/taro'
import { View,Button,Input } from './node_modules/@tarojs/component'
import { PropTypes } from '@tarojs/components'
import classnames from 'classnames'


class Count extends Component {
  constructor(props) {
    super(props)

    this._input = null

  }

  onBlur(id) {

    const {
      onChange
    } = this.props

    const value = this._input.value 
    console.log(value)
    onChange(id, value)

  }

  render() {

    const {
      id,
      onPlus,
      onMinus,
      status
    } = this.props
    
    rootClass = {
      'count-root': true
    }

    return (
    <View className={classnames(rootClass, this.props.className)}>
      <View className="count-root__wrapper">
      <Button className="btn minus" onClick = {()=>onMinus(id)}>-</Button>
        <Input value={status} onBlur={()=>this.onBlur.bind(this,id)} ref={(node)=> this._input = node}/>
        <Button className="btn plus" onClick={()=>onPlus(id)}>+</Button>
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
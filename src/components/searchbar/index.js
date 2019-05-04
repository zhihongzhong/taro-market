import Taro, {Component} from '@tarojs/taro'
import { View,Input, Button } from '@tarojs/components'
import classnames from 'classnames'
import { PropTypes } from 'nervjs'
import './index.scss'


class SearchBar extends Component {
  constructor(props) {
    this.state = {
      text: {}
    }
  }

  render() {
    const {
      onLeftButttonClick,
      onRightButtonClick,
      onChange
    } = this.props;

    return (
      <View className="search-bar-root">
        <View onClick = { onLeftButttonClick } 
          className="search-bar-root__button leftbutton">
        </View>

        <View className="search-bar-root__input-wrapper">
        <View className="search"></View>
        <Input style={{textAlign:"left",
          paddingLeft:"55rpx",
          backgroundColor:"#E6E5E5",
          borderRadius:"7rpx",
          height:"100%"}}
          placeholder="请输入搜索商品" 
          onChange={onChange}
          />
        </View>

        <View onClick={ onRightButtonClick } 
          className="search-bar-root__button rightbutton">
        </View>
      </View>
    )
  }
}


SearchBar.defaultProps = {
  onLeftButttonClick: ()=>{},
  onRightButtonClick: ()=>{},
  onChange: ()=>{},
}

SearchBar.propTypes = {
  onLeftButttonClick: PropTypes.func,
  onRightButtonClick: PropTypes.func,
  onChange: PropTypes.func
}


export default SearchBar;
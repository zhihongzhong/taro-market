import Taro, {Component} from '@tarojs/taro';
import {View,Image,Text } from '@tarojs/components';
import Img from '../../images/itemImage.jpg';
import classnames from 'classnames';

import './index.scss';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      freeshipping,
      vip,
      img,
      price,
      vertical,
      onCardClick,
      onCartClick
    } = this.props

    const rootClass = {
      'card-root-one':vertical,
      'card-root-two':!vertical,
    }

    return (
      <View className={ classnames(rootClass, this.props.className )} onClick={onCardClick}>
        <View className="card-wrapper">
          <View className="image-wrapper">
            <Image src={img} className="image"></Image>
          </View>
          <View className="detail">
            <View className="detail_title-wrapper">
              <Text className="title">{title}</Text>
            </View>
            {
              freeshipping && 
              <View className="detail_freeshipping-wrapper">
                <Text className="freeshipping">包邮购</Text>
              </View>
            }
            <View className="detail_price-wrapper">
              <View className="vip-wrapper">
                {
                  vip && 
                  <View className="vip"></View>
                }
                <View className="price-wrapper">
                  <Text className="unit">￥</Text>
                  <Text className="int">{Math.floor(price)}.</Text>
                  <Text className="float">{Math.floor((price - Math.floor(price))*100)}</Text>
                </View>
              </View>
              <View className="cart-wrapper" onClick={onCartClick}>
                  <View className="cart"></View>
              </View>
            </View>
          </View>
        </View>
        <View className="divider"></View>
      </View>
    )
  }
}


Card.defaultProps = {
  title: '马赛克 xxxg/包',
  freeshipping: true,
  vip: true,
  img: Img,
  price: 19.44,
  vertical: true,
  onCardClick: ()=>{},
  onCartClick: () =>{}
}
export default Card;
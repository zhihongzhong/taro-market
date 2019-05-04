import Taro, {Component} from '@tarojs/taro'
import { View } from '@tarojs/components'
import merchandiseImage from '../../images/itemImage.jpg'
import Card from '../card'
import { PropTypes } from 'nervjs'
import classnames from 'classnames'

class CardList extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {
      merchandises,
      onCardClick,
      onCartClick,
      vertical
    } = this.props

    const cardListStyle = {
      'card-list-root': !vertical
    }

    const cardWrapper = {
      'card-list-root__card-wrapper':true
    }

    return (
      <View className={classnames(cardListStyle)}>
        {
          merchandises.map((merchandise,index)=> (
            <Card 
              key={merchandise.id}
              title={merchandise.title}
              freeshipping= {merchandise.freeshipping}
              img= {merchandise.img}
              price = {merchandise.price}
              vertical ={ vertical }
              vip = { merchandise.vip }
              className ={cardWrapper}
              onCardClick = {() => onCardClick(merchandise.id)}
              onCartClick = {()=> onCartClick(merchandise.id) }
            />
          ))
        }
      </View>
    )
  }
}

CardList.defaultProps = {
  merchandises : [
    {
      id: 1,
      title: '马赛克 205g/包',
      desc: '关于马赛克的描述',
      vip: true,
      img: merchandiseImage,
      freeshipping: true,
      price: 19.44,
      repoNum: 100,
      vipPrice: 18.00,        
    },
    {
      id: 2,
      title: '马赛克 205g/包',
      desc: '关于马赛克的描述',
      vip: true,
      freeshipping: true,
      img: merchandiseImage,
      price: 19.44,
      vipPrice: 18.00,   
      repoNum: 100,
    },
    {
      id: 3,
      title: '马赛克 205g/包',
      desc: '关于马赛克的描述',
      vip: true,
      img: merchandiseImage,
      freeshipping: true,
      price: 19.44,
      vipPrice: 18.00,   
      repoNum: 100,
    }
  ],
  onCardClick: (id) => {},
  onCartClick: (id) => {},
  vertical: false
}

CardList.propTypes = {
  merchandises: PropTypes.array,
  onCardClick: PropTypes.func,
  onCartClick: PropTypes.func,
  vertical: PropTypes.bool
}

export default CardList;


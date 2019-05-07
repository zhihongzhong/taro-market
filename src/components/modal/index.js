import Taro,{Component} from "@tarojs/taro"
import {View, Image,Text, Button} from '@tarojs/components'
import classnames from 'classnames'
import Count from '../../components/count'
import './index.scss'
import Img from '../../images/itemImage.jpg'


class Modal extends Component {
  constructor(props) {
    this.state = {
      _show: props.show,
      animShow:false
    }

    this._showHeight = "300rpx";
    this._hideHeight = "0";
  }

  animShow() {
    Taro.hideTabBar();
    this.setState({
      _show: true
    });
    setTimeout(()=> this.setState({
      animShow: true
    }),200);
  }

  animHide() {
    
    this.setState({
      animShow: false
    });
    
    setTimeout(()=> this.setState({
      _show: false
    }),200);

    setTimeout(()=> Taro.showTabBar(), 200)
  }

  onMaskClick() {
    this.animHide();
  }
  componentDidMount() {
    const {show} = this.props;
    if(show) this.animShow();
  }

  componentWillReceiveProps(nextProps) {
    const {show} = nextProps;
    
    if(show !== this.state._show) {
      this.state._show ? this.animHide() : this.animShow();
    }
  }
  render() {
    const {
      cid,
      img,
      price,
      num,
      respoNum,
      onMaskClick,
      onPlus,
      onMinus,
      onChange,
      onAddToCart,
      onPurches
    } = this.props

    const {
      _show,
      animShow
    } = this.state 

    const maskanime = {
      "modal-root__mask":true,
    }

    const maskstyle = {
      opacity: animShow ? 1 : 0,
      display:animShow ? "block": "none"
    }

    const contentstyle = {
      opacity: animShow ?1: 0,
      height:animShow ? this._showHeight : this._hideHeight,
      transition:animShow ? "all 225ms cubic-bezier(0, 0, 0.2, 1)" :"all 195ms cubic-bezier(0.4, 0, 0.6, 1)"
    }

    return (
      _show && 
      <View className="modal-root">
        <View className={classnames(maskanime)} style={maskstyle} onClick={onMaskClick}></View>
        <View className="modal-root__content" style = {contentstyle}>
          <View className="head">
            <View className="image"><Image src={img} /></View>
            <View className="detail">
              <View className="price-content">
              <Text>会员￥</Text><Text className="price">{price}</Text>
              </View>
              <View className="respo-num">
              <Text>库存量{respoNum}件</Text>
              </View>
            </View>
          </View>
          <View className="body">
            <View className="__divider"></View>
            <View className="num-selector">
              <View style={{marginLeft:"20rpx"}}>数量</View>
              <View style={{marginRight:"20rpx"}}>
                <Count
                  onMinus={()=>onMinus(cid)}
                  onPlus={()=>onPlus(cid)}
                  onChange={(num)=>onChange(cid,num)}
                  status={num}
                />
              </View>
            </View>
          </View>
          <View className="foot">
            <Button onClick={onAddToCart} className="btn btn-shopping-cart">加入购物车</Button>
            <Button onClick={onPurches} className="btn btn-buy-instantly">立即购买</Button>
          </View>
        </View>
      </View>
    )
  }

}

Modal.defaultProps = {
  cid: 1,
  img: Img,
  price: 100.00,
  respoNum: 30,
  show:false,
  onMaskClick:()=>{},
  onPlus:()=>{},
  onMinus:()=>{},
  onChange:()=>{},
  onAddToCart: () =>{},
  onPurches: ()=>{}
}



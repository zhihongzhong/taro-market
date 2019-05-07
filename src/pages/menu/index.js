import Taro, {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import { connect } from '@tarojs/redux';
import SearchBar from '../../components/searchbar';
import Modal from '../../components/modal';
import CardList from '../../components/cardlist';
import merchandiseImage from '../../images/itemImage.jpg';
import './index.scss';
import {addItem} from '../../actions/shoppinglist';


const mapStatetoProps = ({ shoppinglist }) => ({
  shoppinglist 
})

const mapDispatchToProps =(dispatch) => ({
  add(merchandise) {
    dispatch(addItem(merchandise))
  }
})

@connect(mapStatetoProps, mapDispatchToProps)
class Menu extends Component {
  constructor(props) {
    this.state = {
      modalShow: false,
      vertical: true,
      currentMerchandiseId: 0,
      merchandises : [
        {
          id: 1,
          title: '马赛克 205g/包',
          desc: '关于马赛克的描述',
          vip: true,
          img: merchandiseImage,
          freeshipping: true,
          price: 19.44,
          respoNum: 97,
          vipPrice: 18.00,
          num:1,        
        },
        {
          id: 2,
          title: '马赛克 205g/包',
          desc: '关于马赛克的描述',
          vip: true,
          freeshipping: true,
          img: merchandiseImage,
          price: 20.44,
          vipPrice: 18.00,   
          respoNum: 99,
          num:1,       
        },
        {
          id: 3,
          title: '马赛克 205g/包',
          desc: '关于马赛克的描述',
          vip: true,
          img: merchandiseImage,
          freeshipping: true,
          price: 21.44,
          vipPrice: 18.00,   
          respoNum: 60,
          num:1,       
        }
      ],
    }
  }

  onCartClick (id) {

    let currentMerchandise = 0
    currentMerchandise = this.state.merchandises.filter((m) => m.id === id)[0];
    this.setState({
      currentMerchandiseId: currentMerchandise.id,
      modalShow: true,
    })
  }

  onRightButtonClick() {
    this.setState({
      vertical: !this.state.vertical
    })
  }

  onMaskClick() {
    this.setState({
      modalShow:false
    })
  }

  onPlus(id) {
    let { merchandises } = this.state;
    merchandises = merchandises.map((merchandise) => merchandise.id === id ? {
      ...merchandise,
      num: merchandise.num < merchandise.respoNum ? merchandise.num+1: merchandise.num
    }: merchandise)

    this.setState({
      merchandises
    })

  }

  onMinus(id) {
    let { merchandises } = this.state;
    merchandises = merchandises.map((merchandise) => merchandise.id === id ? {
      ...merchandise,
      num: merchandise.num > 1 ? merchandise.num -1 : merchandise.num
    }: merchandise)

    this.setState({
      merchandises
    })
  }

  onMerchandiseChange(id, num) {
    let { merchandises } = this.state;
    
    merchandises = merchandises.map((merchandise) => merchandise.id === id ? {
      ...merchandise,
      num: num < merchandise.respoNum ? num : merchandise.respoNum
    }: merchandise)

    this.setState({
      merchandises
    })
  }

  render() {
    const {
      modalShow,
      merchandises,
      currentMerchandiseId
    } = this.state
    
    const currentMerchandise = this.state.merchandises.filter((m)=>m.id === currentMerchandiseId)[0]

    return(
      <View>
        <SearchBar onRightButtonClick={this.onRightButtonClick.bind(this)}/>
        <CardList 
          vertical={this.state.vertical}
          merchandises = {merchandises}
          onCartClick = {this.onCartClick.bind(this)}
          />
        <Modal 
          cid={currentMerchandise.id}
          show={modalShow} 
          num={currentMerchandise.num}
          onMaskClick={this.onMaskClick.bind(this)}
          img={currentMerchandise.img}
          price={currentMerchandise.price}
          respoNum = {currentMerchandise.respoNum}
          onMinus={this.onMinus.bind(this)}
          onPlus={this.onPlus.bind(this)}
          onChange={this.onMerchandiseChange.bind(this)}
        />
      </View>
    );
  }
}


export default Menu;
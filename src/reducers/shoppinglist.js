
import {SHOPPINGLIST_OPERATION} from '../constants/shoppinglist';

const INITIAL_STATE = [];


const shoppingList = (state = INITIAL_STATE, action)=> {
  switch(action.type) {
    default:
      return INITIAL_STATE;
    case SHOPPINGLIST_OPERATION.ADD: 
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          desc: action.desc,
          num: action.num,
          price: action.price,
          img: action.img,
          reposNum: action.reposNum,
        },
      ];
    case SHOPPINGLIST_OPERATION.REMOVE:
      return state.filter((s, i) => s.id !== action.id);

    case SHOPPINGLIST_OPERATION.INCREMENT:
      return state.map((s, i) => s.id === action.id ? {
        ...s, 
        num: s.num >= s.reposNum ? s.num: s.num+1,
      }: s);

    case SHOPPINGLIST_OPERATION.DECREMENT:
      return state.map((s, i) => s.id === action.id ? {
        ...s,
        num: s.num > 0 && s.num-1,
      }:s);
  }
}

export default shoppingList;
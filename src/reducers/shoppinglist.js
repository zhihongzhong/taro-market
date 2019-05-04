
import {SHOPPINGLIST_TEST,SHOPPINGLIST_OPERATION} from '../constants/shoppinglist';

const INITIAL_STATE = SHOPPINGLIST_TEST;


// item format 
// {
//   id: 4,
//   title: "test4",
//   desc: "test4...",
//   num: 1,
//   price: 10,
//   img: itemImage,
//   repoNum: 10,
//   sold: 10,
// }

const shoppingList = (state = INITIAL_STATE, action)=> {
  switch(action) {
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
          repoNum: action.repoNum,
        },
      ];
    case SHOPPINGLIST_OPERATION.REMOVE:
      return state.filter((s, i) => s.id !== action.id);
    case SHOPPINGLIST_OPERATION.INCREMENT:
      return state.map((s, i) => s.id === action.id ? {
        ...s, 
        num: s.num >= repoNum ? s.num: s.num++,
      }: s);
    case SHOPPINGLIST_OPERATION.DECREMENT:
      return state.map((s, i) => s.id === action.id ? {
        ...s,
        num: s.num > 0 && s.num-1,
      }:s);
  }
}

export default shoppingList;
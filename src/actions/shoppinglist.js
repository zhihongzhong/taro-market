
import {
  SHOPPINGLIST_OPERATION  
} from "../constants/shoppinglist";

// add item 
// item format is as the same as the follow
// {
//   id: 1,
//   title: "test1",
//   desc: "test1...",
//   num: 1,
//   price: 10,
//   repoNum: 10,
//   sold: 10,
//   img: itemImage
// },
export const addItem = (item)=> ({
  type: SHOPPINGLIST_OPERATION.ADD,
  id: item.id,
  title: item.title,
  desc: item.desc,
  num: item.num,
  reposNum: item.reposNum,
  img: item.img,
  price: item.price
});

export const removeItem = (id) => ({
  type: SHOPPINGLIST_OPERATION.REMOVE,
  id
});

export const increaseItem = (id)=> {
  console.log("INCREMENT")
  return {
    type: SHOPPINGLIST_OPERATION.INCREMENT,
    id
  }
}
export const decrementItem =(id) => ({
  type: SHOPPINGLIST_OPERATION.DECREMENT,
  id
});

export const addItemNumber = (id, num) => ({
  
})


import { combineReducers } from 'redux'
import counter from './counter'
import shoppinglist from './shoppinglist'
export default combineReducers({
  counter,
  shoppinglist
})

import { combineReducers } from 'redux'
import counter from './counter'
import shoppinglist from './shoppinglist'
import repository from './repository'

export default combineReducers({
  counter,
  shoppinglist,
  repository
})

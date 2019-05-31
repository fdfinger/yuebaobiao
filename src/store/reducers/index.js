import { combineReducers } from 'redux'
import counter from './counter'
import income from './income'
import outlay from './outlay'
import debt from './debt'
import property from './property'

export default combineReducers({
  counter,
  income,
  outlay,
  debt,
  property
})

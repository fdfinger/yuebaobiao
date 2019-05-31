import { handleActions } from 'redux-actions'
import { UPDATEDEBTTOTAL, UPDATEDEBTOBJECT } from '../types/debt'

export default handleActions({
  [UPDATEDEBTTOTAL] (state) {
    return {
      ...state,
      debtTotal: arguments[1].payload
    }
  },
  [UPDATEDEBTOBJECT] (state) {
    const keys = Object.keys(arguments[1].payload)
    return {
      ...state,
      debtObject: state.debtObject.map(i => {
        if (keys.includes(i.name)) i.value = arguments[1].payload[i.name]
        return i
      })
    }
  }
}, {
  debtTotal: 0,
  debtObject: [
    {
      title: '花呗',
      name: 'huabei',
      value: '0'
    },
    {
      title: '信用卡',
      name: 'xinyongka',
      value: '0'
    },
    {
      title: '外债',
      name: 'waizhai',
      value: '0'
    },
    {
      title: '其他',
      name: 'other',
      value: '0'
    }
  ]
})

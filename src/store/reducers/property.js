import { handleActions } from 'redux-actions'
import { UPDATEPROPERTYTOTAL, UPDATEPROPERTYOBJECT } from '../types/property'

export default handleActions({
  [UPDATEPROPERTYTOTAL] (state) {
    return {
      ...state,
      propertyTotal: arguments[1].payload
    }
  },
  [UPDATEPROPERTYOBJECT] (state) {
    const keys = Object.keys(arguments[1].payload)
    return {
      ...state,
      propertyObject: state.propertyObject.map(i => {
        if (keys.includes(i.name)) i.value = arguments[1].payload[i.name]
        return i
      })
    }
  }
}, {
  propertyTotal: 0,
  propertyObject: [
    {
      title: '股票',
      name: 'stock',
      value: '0'
    },
    {
      title: '基金',
      name: 'fund',
      value: '0'
    },
    {
      title: '定存',
      name: 'time_deposit',
      value: '0'
    },
    {
      title: '活期',
      name: 'current',
      value: '0'
    },
    {
      title: '期货',
      name: 'futures',
      value: '0'
    },
    {
      title: '其他',
      name: 'other',
      value: '0'
    }
  ]
})

import { handleActions } from 'redux-actions'
import { UPDATEOUTLAYTOTAL, UPDATEOUTLAYOBJECT } from '../types/outlay'

export default handleActions({
  [UPDATEOUTLAYTOTAL] (state) {
    return {
      ...state,
      outlayTotal: arguments[1].payload
    }
  },
  [UPDATEOUTLAYOBJECT] (state) {
    const keys = Object.keys(arguments[1].payload)
    return {
      ...state,
      outlayObject: state.outlayObject.map(i => {
        if (keys.includes(i.name)) i.value = arguments[1].payload[i.name]
        return i
      })
    }
  }
}, {
  outlayTotal: 0,
  outlayObject: [
    {
      title: '房租',
      name: 'rent',
      value: '0'
    },
    {
      title: '吃饭',
      name: 'eat',
      value: '0'
    },
    {
      title: '交通',
      name: 'traffic',
      value: '0'
    },
    {
      title: '话费',
      name: 'telephone_cost',
      value: '0'
    },
    {
      title: '其他',
      name: 'other',
      value: '0'
    }
  ]
})

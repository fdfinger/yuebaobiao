import { handleActions } from 'redux-actions'
import { UPDATEINCOMETOTAL, UPDATEINCOMEOBJECT } from '../types/income'

export default handleActions({
  [UPDATEINCOMETOTAL] (state) {
    return {
      ...state,
      incomeTotal: arguments[1].payload
    }
  },
  [UPDATEINCOMEOBJECT] (state) {
    const keys = Object.keys(arguments[1].payload)
    return {
      ...state,
      incomeObject: state.incomeObject.map(i => {
        if (keys.includes(i.name)) i.value = arguments[1].payload[i.name]
        return i
      })
    }
  }
}, {
  incomeTotal: 0,
  incomeObject: [
    {
      title: '工资',
      name: 'wage',
      value: '0'
    },
    {
      title: '版权',
      name: 'ownership',
      value: '0'
    },
    {
      title: '利息',
      name: 'impressive',
      value: '0'
    },
    {
      title: '其他',
      name: 'other',
      value: '0'
    }
  ]
})

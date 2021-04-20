import * as types from './mutation-types'

const mutations = {
  [types.ADD_TO_CART](state, goods){
    state.cartList.push(goods)
  },
  [types.INCREMENT_COUNT](state, index){
    state.cartList[index].count ++
  },
  [types.ADD_TO_SEC_KILL](state, IidList){
    console.log("mutations get iidList:", IidList)
    state.secKillIidList= IidList
    console.log("state.secKillList:", state.secKillIidList)
  }
}

export default mutations

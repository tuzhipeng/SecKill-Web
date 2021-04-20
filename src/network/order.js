import {request} from "./request";

export function postOrder(list) {
  return request({
    method: 'post',
    url : '/order',
    data : {
      list : list
    }
  })
}

export function postSecKillOrder(obj) {
  return request({
    method: 'post',
    url : 'http://47.93.12.71:7777/api/secKillOrder',
    data : obj

  })
}

export function getOrder(page) {
  return request({
    method: 'get',
    url:'/order',
    params:{
      page
    }
  })
}

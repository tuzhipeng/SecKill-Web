import {request} from "./request";

export function login(uid, password) {
  return request({
    method : 'post',
    url : '/user',
    data : {
      uid : uid,
      password : password
    }

  })
}

export function getUserInfo() {
  return request({
    method: 'get',
    url: '/user',
  })

}

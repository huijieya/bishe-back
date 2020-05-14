import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/courseSystem/getList',
    method: 'post',
    data: data
  })
}

export function updateById(keyId, courseSystemName, courseType, data) {
  return request({
    url: '/courseSystem/updateById' + '?id=' + keyId + '&&courseSystemName=' + courseSystemName + '&&courseType=' + courseType,
    method: 'post',
    data: data,
    headers: { 'Content-Type': 'application/json' }
  })
}

export function insertCourseSystem(courseSystemName, courseType, data) {
  return request({
    url: '/courseSystem/insert' + '?courseSystemName=' + courseSystemName + '&&courseType=' + courseType,
    method: 'post',
    data: data,
    headers: { 'Content-Type': 'application/json' }
  })
}

export function deleteCourseSystem(params) {
  return request({
    url: '/courseSystem/delete' + '?id=' + params,
    method: 'post',
    params
  })
}

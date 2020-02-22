import request from '@/utils/request'

export function initTrainProgramByGrade(params) {
  return request({
    url: '/trainProgram/page/init',
    method: 'get',
    params
  })
}

export function addTrainProgram(data) {
  return request({
    url: '/trainProgram/add',
    method: 'post',
    data: data,
    headers: { 'Content-Type': 'application/json' }
  })
}

export function deleteTrainProgram(params) {
  return request({
    url: '/trainProgram/delete',
    method: 'delete',
    params
  })
}

export function alterTrainProgram(data) {
  return request({
    url: '/trainProgram/alter',
    method: 'post',
    data: data,
    headers: { 'Content-Type': 'application/json' }
  })
}

export function findTrainProgramByGrade(params) {
  return request({
    url: '/trainProgram/findByGrade' + '?grade=' + params,
    method: 'get',
    params
  })
}

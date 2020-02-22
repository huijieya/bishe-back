import request from '@/utils/request'

export function initTrainProgramByGrade(params) {
  return request({
    url: '/trainProgram/page/init',
    method: 'get',
    params
  })
}

export function addTrainProgram(params) {
  return request({
    url: '/trainProgram/add',
    method: 'post',
    params
  })
}

export function deleteTrainProgram(params) {
  return request({
    url: '/trainProgram/delete',
    method: 'delete',
    params
  })
}

export function alterTrainProgram(params) {
  return request({
    url: '/trainProgram/alter',
    method: 'post',
    params
  })
}

export function findTrainProgramByGrade(params) {
  return request({
    url: '/trainProgram/findByGrade' + '?grade=' + params,
    method: 'get',
    params
  })
}

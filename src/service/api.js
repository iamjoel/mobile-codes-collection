import axios from 'axios'
import wrapFetchQuery from '@/assets/utils/wrap-fetch-query'
import { urls, SERVER_PREFIX } from '@/setting'

export const fetchList = (key, condition, pager, order, axiosConfig = {}) => {
  var url = (urls[key] && urls[key].list) || `${SERVER_PREFIX}/${key}/list`
  var url = wrapFetchQuery(url, condition, pager, order)
  return axios.get(url, {
    params: {},
    ...axiosConfig
  })
}

export const fetchModel = (key, id, axiosConfig = {}) => {
  var url = (urls[key] && urls[key].detail) || `${SERVER_PREFIX}/${key}/detail`
  return axios.get(`${url}/${id}`, {
    params: {},
    ...axiosConfig
  })
}

export const addModel = (key, data, axiosConfig = {}) => {
  var url = (urls[key] && urls[key].add) || `${SERVER_PREFIX}/${key}/add`
  return axios.post(url, Object.assign({}, data, {}), ...axiosConfig)
}

export const editModel = (key, data, axiosConfig = {}) => {
  delete data.createTime
  delete data.updateTime
  delete data.delFlg
  delete data.moreInfo
  // var url = `${urls[key].edit}/${data.id}`
  var url = (urls[key] && `${urls[key].edit}`) || `${SERVER_PREFIX}/${key}/edit`
  return axios.post(url, Object.assign({}, data, {}), ...axiosConfig)
}

export const deleteModel = (key, id, axiosConfig = {}) => {
  var url = (urls[key] && urls[key].del) || `${SERVER_PREFIX}/${key}/del`
  return axios.post(`${url}/${id}`, {}, ...axiosConfig)
}

import Taro from '@tarojs/taro'
import {API} from './index'

export const getCashType =async () => {
  return await Taro.request({
    url:`${API}/api/getCashType`
  })
}


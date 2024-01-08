import request from '@/axios'
import { CustomerItem, PageParams } from './types'

export const customerListApi = (params: PageParams): Promise<IPageResponse<CustomerItem>> => {
  return request.get({ url: '/customer/customerList', params })
}

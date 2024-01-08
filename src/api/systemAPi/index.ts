import request from '@/axios'
import { ISystemAPi } from './types'

export const sysApiListApi = (params: ISystemAPi.IListParams): Promise<IPageResponse> => {
  return request.post({ url: '/api/getApiList', data: params })
}

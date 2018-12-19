// Application interface
// server web Application
import {
  wxRequest
} from '@/utils/wxRequest'

const apiMall = 'https://sujiefs.com'
const getAdList = (param) => wxRequest(param, apiMall + '/api/adverts/list')
export default {
  getAdList
}
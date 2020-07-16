

import {
    request
} from 'src/utils'
const Service = {
    GetStoreList: (data: {
        data: {
            city: string,
            offPay: number,
            orderType: number
        }
    }):Promise<{
            stores: Array<{
                city: string
                merchantId: number
                storeId: number
                storeName: string
            }>
    }> => request.post('/beauty/store-server/mapi/common/store_list', data),
    GetCityList: (data: {
        orderType: number
    }):Promise<{
        city: string
        cityList?: Array<{
            city: string
        }>
    }> => request.post('/beauty/store-server/mapi/common/city_list', data)
}

export default Service

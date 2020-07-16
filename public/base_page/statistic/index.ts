// 打点功能
import { rprm } from 'src/utils';

const globalInfo = window._global || {}
const userInfo = globalInfo.user || {}


const publicRec = rprm({
    pagename: '',
    business: '',
    pid: window._global.pid || '',
    store_id: localStorage.getItem('storeId') || '',
    wid: userInfo.wid || '',
    subusiness: ''
})

export default function () {
  return {
    pv: () => {

    }
  }
}

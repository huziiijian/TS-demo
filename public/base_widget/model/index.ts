import {Props} from '../dto'

const Model = (e:Props)=> {
    const store = {
        // 生命周期: 安装
        _install() {
            console.log('install')
        },
        // 生命周期: 卸载
        _uninstall() {
            console.log('uninstall')
        },

    }
    return store
}
export type ModelType = ReturnType<typeof Model>
export default Model
